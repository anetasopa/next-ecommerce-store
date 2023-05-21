// import { cookies } from 'next/headers';
// import { getCookie } from '../../../util/cookies';
// import { parseJson } from '../../../util/json';

// ('use server');

// export async function createOrUpdateQuantity(productId, quantity) {
//   const productQuantityCookie = getCookie('productQuantity');
//   const productQuantities = !productQuantityCookie
//     ? []
//     : parseJson(productQuantityCookie);

//   const quantityToUpdate = productQuantities.find((quantityNumber) => {
//     return quantityNumber.id === productId;
//   });

//   if (quantityToUpdate) {
//     quantityToUpdate.quantity =
//       Number(quantityToUpdate.quantity) + Number(quantity);
//   } else {
//     productQuantities.push({
//       id: productId,
//       quantity,
//     });
//   }

//   await cookies().set('productQuantity', JSON.stringify(productQuantities));
// }
