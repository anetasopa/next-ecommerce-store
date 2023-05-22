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

export async function removeQuantity(productId, quantity) {
  const productQuantityCookie = getCookie('cart');

  const productQuantities = !productQuantityCookie
    ? []
    : parseJson(productQuantityCookie);

  const removeValueQuantity = productQuantities.find((quantityNumber) => {
    return quantityNumber.id === productId;
  });

  if (removeValueQuantity) {
    removeValueQuantity.quantity =
      Number(removeValueQuantity.quantity) - Number(quantity);
  } else {
    productQuantities.push({
      id: productId,
      quantity,
    });
  }

  await cookies().set('cart', JSON.stringify(productQuantities));
}
