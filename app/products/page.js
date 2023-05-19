import Image from 'next/image';
import Link from 'next/link';
import { products } from '../../database/products';
import styles from './page.module.scss';

export default function ProductPage() {
  return (
    <main className={styles.containerOverview}>
      <h1>this is my title</h1>
      <div className={styles.productsCardsContainer}>
        {products.map((product) => {
          console.log({ product });
          return (
            <div
              key={`product-div-${product.id}`}
              className={styles.productCard}
            >
              {' '}
              <Image
                src={`/images/${product.name}.png`}
                width={250}
                height={200}
              />
              <Link href={`/products/${product.id}`}>{product.name}</Link>
              <Link href={`/products/${product.id}`}>{product.price}</Link>
            </div>
          );
        })}
      </div>
    </main>
  );
}
