'use server';

import { cookies } from 'next/headers';
import { getCookie } from '../../../util/cookies';
import { parseJson } from '../../../util/json';
import { CookieItem } from './page';

export async function update(
  quantityToUpdate: CookieItem | undefined,
  productQuantities: CookieItem[] | undefined,
  productId: number,
  quantity: number,
) {
  if (quantityToUpdate) {
    quantityToUpdate.quantity =
      Number(quantityToUpdate.quantity) + Number(quantity);
  } else {
    productQuantities!.push({
      id: productId,
      quantity,
    });
  }
}

export async function createOrUpdateQuantity(
  productId: number,
  quantity: number,
) {
  const productQuantityCookie = getCookie('cart');

  const productQuantities = !productQuantityCookie
    ? []
    : parseJson(productQuantityCookie);

  const quantityToUpdate = productQuantities?.find((quantityNumber) => {
    return quantityNumber.id === productId;
  });

  await update(quantityToUpdate, productQuantities, quantity, productId);

  await cookies().set('cart', JSON.stringify(productQuantities));
}
