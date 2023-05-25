import Image from 'next/image';
import Link from 'next/link';
import { getProducts } from '../../database/products';
// import { products } from '../../database/products';
import styles from './page.module.scss';

export const metadata = {
  title: 'Products Overview',
  description: 'Look fot the products',
};

export default async function ProductPage() {
  const products = await getProducts();
  return (
    <main className={styles.containerOverview}>
      <h1>Products</h1>
      <div className={styles.productsCardsContainer}>
        {products.map((product) => {
          return (
            <div
              key={`product-div-${product.id}`}
              className={styles.productCard}
            >
              {' '}
              <div className={styles.container}>
                <Image
                  alt=""
                  data-test-id="product-image"
                  src={`/images/${product.name}.png`}
                  width={250}
                  height={200}
                />
                <div className={styles.overlay}></div>
                <div className={styles.button}>
                  <Link
                    data-test-id="products-link"
                    className={styles.a}
                    href={`/products/${product.id}`}
                    style={{
                      color: 'black',
                      textDecoration: 'none',
                    }}
                  >
                    OPEN
                  </Link>
                </div>
              </div>
              <Link
                data-test-id="products-link"
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
                {product.price} <span>Eur</span>{' '}
              </p>
            </div>
          );
        })}
      </div>
    </main>
  );
}
