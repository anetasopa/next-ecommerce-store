// import sjson from 'secure-json-parse';

// export function parseJson(string) {
//   if (!string) return undefined;

//   try {
//     return sjson(string);
//   } catch {
//     return undefined;
//   }
// }

import sjson from 'secure-json-parse';
import { CookieItem } from '../app/products/[productId]/page';

export function parseJson(stringifiedJson: string): undefined | CookieItem[] {
  if (!stringifiedJson) return undefined;

  try {
    return sjson(stringifiedJson);
  } catch {
    return undefined;
  }
}
