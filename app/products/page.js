import Image from 'next/image';
import Link from 'next/link';
import { products } from '../../database/products';
import styles from './page.module.scss';

export default function ProductPage() {
  return (
    <main className={styles.container}>
      This are my products
      {products.map((product) => {
        console.log({ product });
        return (
          <div key={`product-div-${product.id}`}>
            <Link href={`/products/${product.id}`}>{product.name}</Link>
            <br />
            <Image
              src={`/images/${product.name}.png`}
              width={100}
              height={100}
            />
          </div>
        );
      })}
    </main>
  );
}
