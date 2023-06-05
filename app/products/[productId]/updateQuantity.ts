import { parseJson } from '../../../util/json';
import { CookieItem } from './page';

function update(
  quantityToUpdate: CookieItem | undefined,
  productQuantities: CookieItem[] | undefined,
  quantity: number,
  productId: number,
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

export function updateQuantity(
  productQuantityCookie: string | undefined,
  productId: number,
  quantity: number,
) {
  const productQuantities = !productQuantityCookie
    ? []
    : parseJson(productQuantityCookie);

  const quantityToUpdate = productQuantities?.find((quantityNumber) => {
    return quantityNumber.id === productId;
  });

  update(quantityToUpdate, productQuantities, quantity, productId);

  return JSON.stringify(productQuantities);
}
