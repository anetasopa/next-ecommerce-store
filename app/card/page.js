import Image from 'next/image';
import Link from 'next/link';
import { getProducts } from '../../database/products';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';
import styles from './page.module.scss';
import QuantityCounter from './QuantityCounter';
import Sum from './Sum';

export const dynamic = 'force-dynamic';

export default async function CardPage() {
  const products = await getProducts();
  const valueCookies = getCookie('cart'); // This a string

  const cookies = !valueCookies ? [] : parseJson(valueCookies); // this is an array

  const itemInCart = products.map((product) => {
    const matchingItems = cookies.find(
      (cookieItem) => product.id === cookieItem.id,
    );

    return { ...product, quantity: matchingItems?.quantity };
  });

  const filteredProducts = itemInCart.filter((item) => item.quantity);

  return (
    <main>
      <div className={styles.container}>
        <h1>Products Cart</h1>
        <div className={styles.containerCardProducts}>
          <div className={styles.cardsContainer}>
            {filteredProducts.map((product) => {
              return (
                <div
                  key={`product-div-${product.id}`}
                  data-test-id={`cart-product-${product.id}`}
                >
                  <div className={styles.productCard}>
                    <Image
                      alt=""
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
