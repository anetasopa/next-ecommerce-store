'use server';

import { cookies } from 'next/headers';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';

export type CartItem = {
  id: number;
  quantity: number | undefined;
};

export async function removeItem(item: CartItem) {
  const productQuantityCookie = getCookie('cart'); // Get cookie from client as string
  const productQuantities = !productQuantityCookie
    ? []
    : parseJson(productQuantityCookie); // Check cookie and return array of objects

  const removeCart = productQuantities?.filter(
    (product) => product.id !== item.id,
  );
  await cookies().set('cart', JSON.stringify(removeCart));
}

export async function addQuantity(item: CartItem) {
  const productQuantityCookie = getCookie('cart');

  const productQuantities = !productQuantityCookie
    ? []
    : parseJson(productQuantityCookie);

  const addValueQuantity = productQuantities?.find((product: CartItem) => {
    return product.id === item.id;
  });

  if (!addValueQuantity) {
    throw new Error('oops');
  }
  addValueQuantity.quantity += 1;

  await cookies().set('cart', JSON.stringify(productQuantities));
}

export async function removeQuantity(item: CartItem) {
  const productQuantityCookie = getCookie('cart');

  const productQuantities = !productQuantityCookie
    ? []
    : parseJson(productQuantityCookie);

  const removeValueQuantity = productQuantities?.find((product) => {
    return product.id === item.id;
  });

  removeValueQuantity!.quantity > 1
    ? (removeValueQuantity!.quantity -= 1)
    : (removeValueQuantity!.quantity = 1);

  await cookies().set('cart', JSON.stringify(productQuantities));
}
