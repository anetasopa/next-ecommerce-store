'use server';

import { cookies } from 'next/headers';
import { getCookie } from '../../../util/cookies';
import { updateQuantity } from './updateQuantity';

export async function createOrUpdateQuantity(
  productId: number,
  quantity: number,
) {
  const productQuantityCookie = getCookie('cart');

  const productQuantities = updateQuantity(
    productQuantityCookie,
    productId,
    quantity,
  );

  await cookies().set('cart', productQuantities);
}
