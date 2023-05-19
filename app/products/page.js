import Image from 'next/image';
import Link from 'next/link';
import { products } from '../../database/products';
import styles from './page.module.scss';

export default function ProductPage() {
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
              {/* <Image
                src={`/images/${product.name}.png`}
                width={250}
                height={200}
              /> */}
              <div className={styles.container}>
                <Image
                  src={`/images/${product.name}.png`}
                  width={250}
                  height={200}
                />
                <div className={styles.overlay}></div>
                <div className={styles.button}>
                  <Link
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
                className={styles.productName}
                href={`/products/${product.id}`}
                style={{
                  textDecoration: 'none',
                }}
              >
                {product.name}
              </Link>
              <p>{product.type}</p>
              <p>{product.price}</p>
            </div>
          );
        })}
      </div>
    </main>
  );
}
