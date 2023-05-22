'use server';

import { cookies } from 'next/headers';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';

export async function removeItem(item) {
  const productQuantityCookie = getCookie('cart'); // Get cookie from client as string
  const productQuantities = !productQuantityCookie
    ? []
    : parseJson(productQuantityCookie); // Check cookie and return array of objects

  const removeCart = productQuantities.filter(
    (product) => product.id !== item.id,
  );
  await cookies().set('cart', JSON.stringify(removeCart));
}

export async function addQuantity(item) {
  const productQuantityCookie = getCookie('cart');

  const productQuantities = !productQuantityCookie
    ? []
    : parseJson(productQuantityCookie);

  const addValueQuantity = productQuantities.find((product) => {
    return product.id === item.id;
  });
  addValueQuantity.quantity += 1;

  await cookies().set('cart', JSON.stringify(productQuantities));
}

export async function removeQuantity(item) {
  const productQuantityCookie = getCookie('cart');

  const productQuantities = !productQuantityCookie
    ? []
    : parseJson(productQuantityCookie);

  const removeValueQuantity = productQuantities.find((product) => {
    return product.id === item.id;
  });
  removeValueQuantity.quantity -= 1;

  await cookies().set('cart', JSON.stringify(productQuantities));
}
