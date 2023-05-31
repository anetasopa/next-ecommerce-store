'use server';

import { cookies } from 'next/headers';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';

type Cart = {
  id: number;
  quantity: number;
};

export async function removeItem(item: Cart) {
  const productQuantityCookie = await getCookie('cart'); // Get cookie from client as string
  const productQuantities = !productQuantityCookie
    ? []
    : parseJson(productQuantityCookie); // Check cookie and return array of objects

  const removeCart = productQuantities?.filter(
    (product) => product.id !== item.id,
  );
  await cookies().set('cart', JSON.stringify(removeCart));
}

export async function addQuantity(item: Cart) {
  const productQuantityCookie = getCookie('cart');

  const productQuantities = !productQuantityCookie
    ? []
    : parseJson(productQuantityCookie);

  const addValueQuantity = productQuantities?.find((product: Cart) => {
    return product.id === item.id;
  });

  if (!addValueQuantity) {
    throw new Error('oops');
  }
  addValueQuantity.quantity += 1;

  await cookies().set('cart', JSON.stringify(productQuantities));
}

export async function removeQuantity(item: Cart) {
  const productQuantityCookie = await getCookie('cart');

  const productQuantities = !productQuantityCookie
    ? []
    : parseJson(productQuantityCookie);

  const removeValueQuantity = productQuantities?.find((product) => {
    return product.id === item.id;
  });
  removeValueQuantity!.quantity -= 1;

  await cookies().set('cart', JSON.stringify(productQuantities));
}
