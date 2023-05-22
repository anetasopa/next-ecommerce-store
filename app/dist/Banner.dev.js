// import { cookies } from 'next/headers';
// import { products } from '../database/products';
// import { getCookie } from '../util/cookies';
// import { parseJson } from '../util/json';
// export async function displayValueInTheCart() {
//   const valueCartCookie = getCookie('cart');
//   const values = !valueCartCookie ? [] : parseJson(valueCartCookie);
//   const valueCart = products.map((product) => {
//     const matchingProductFromCookie = values.find(
//       (productObject) => product.id === productObject.id,
//     );
//     return { ...product, comment: matchingProductFromCookie?.quantity };
//   });
//   return (
//     <>
//       {valueCart.map((product) => (
//         <div key={`product-div-${product.id}`}>{product.quantity}</div>
//       ))}
//     </>
//   );
// }
"use strict";