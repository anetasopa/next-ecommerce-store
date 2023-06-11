import { Product } from '../../migrations/1684934780-createTableProducts';
import { CookieItem } from '../products/[productId]/page';
import { ProductWithQuantity } from './page';

export function combines(products: Product[], productsInCookie: CookieItem[]) {
  const filteredProducts: ProductWithQuantity[] = [];

  productsInCookie.forEach((item: CookieItem) => {
    const product: Product | undefined = products.find(
      (product1) => product1.id === item.id,
    );

    if (product) {
      filteredProducts.push({
        ...item,
        ...product,
      });
    }
  });

  return filteredProducts;
}
