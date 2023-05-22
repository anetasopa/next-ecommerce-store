'use server';

import { cookies } from 'next/headers';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';

export async function createOrUpdateQuantity(productId, quantity) {
  const productQuantityCookie = getCookie('cart');

  const productQuantities = !productQuantityCookie
    ? []
    : parseJson(productQuantityCookie);

  const quantityToUpdate = productQuantities.find((quantityNumber) => {
    return quantityNumber.id === productId;
  });

  if (quantityToUpdate) {
    quantityToUpdate.quantity =
      Number(quantityToUpdate.quantity) + Number(quantity);
  } else {
    productQuantities.push({
      id: productId,
      quantity,
    });
  }

  await cookies().set('cart', JSON.stringify(productQuantities));
}

export async function addQuantity(productId, quantity) {
  const productQuantityCookie = getCookie('cart');

  const productQuantities = !productQuantityCookie
    ? []
    : parseJson(productQuantityCookie);

  const addValueQuantity = productQuantities.find((quantityNumber) => {
    return quantityNumber.id === productId;
  });

  if (addValueQuantity) {
    addValueQuantity.quantity =
      Number(addValueQuantity.quantity) + Number(quantity);
  } else {
    productQuantities.push({
      id: productId,
      quantity,
    });
  }

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

  console.log('item');
  console.log(item);
  console.log('find');
  console.log(removeValueQuantity);

  removeValueQuantity.quantity -= 1;

  await cookies().set('cart', JSON.stringify(productQuantities));
}
