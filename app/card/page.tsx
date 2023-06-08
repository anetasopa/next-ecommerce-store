import Image from 'next/image';
import Link from 'next/link';
import { getProducts } from '../../database/products';
import { Product } from '../../migrations/1684934780-createTableProducts';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';
import { CookieItem } from '../products/[productId]/page';
import { combines } from './combines';
import styles from './page.module.scss';
import QuantityCounter from './QuantityCounter';
import Sum from './Sum';

export const dynamic = 'force-dynamic';

export type ProductWithQuantity = Product & {
  quantity: number | undefined;
};

export const metadata = {
  title: 'Shopping cart | Coffez',
  description: 'Checkout your shopping cart',
};

export default async function CardPage() {
  const products = await getProducts();
  const valueCookies = getCookie('cart'); // This is a string

  const productsInCookie: CookieItem[] | undefined = valueCookies
    ? parseJson(valueCookies)
    : []; // this is an array

  if (!productsInCookie) {
    throw new Error('no cookies');
  }

  const filteredProducts = combines(products, productsInCookie);

  return (
    <main>
      <div className={styles.container}>
        <h1>Shopping Cart</h1>
        <div className={styles.containerCardProducts}>
          <div className={styles.cardsContainer}>
            {filteredProducts.map((product: ProductWithQuantity) => {
              console.log(product);
              return (
                <div
                  key={`product-div-${product.id}`}
                  data-test-id={`cart-product-${product.id}`}
                >
                  <div className={styles.productCard}>
                    <Image
                      alt={product.name}
                      className={styles.img}
                      src={`/images/${product.name}.png`}
                      width={150}
                      height={100}
                    />
                    <div>
                      <Link
                        className={styles.productName}
                        href={`/products/${product.id}`}
                        style={{
                          textDecoration: 'none',
                        }}
                      >
                        {product.name}
                      </Link>
                      <p className={styles.productType}>{product.type}</p>
                      <p className={styles.productPrice}>
                        {Number(product.price) * Number(product.quantity)}
                        <span> EUR</span>{' '}
                      </p>
                      <QuantityCounter product={product} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <Sum />
        </div>
      </div>
    </main>
  );
}
