import Image from 'next/image';
import Link from 'next/link';
import styles from './SelectProducts.module.scss';

export default function SelectProducts({ filteredProducts, numberOfProducts }) {
  return (
    <div className={styles.productsCardsContainer}>
      <h2>In your cart ({numberOfProducts})</h2>
      {filteredProducts.map((product) => {
        return (
          <div key={`product-div-${product.id}`} className={styles.productCard}>
            <Image
              className={styles.img}
              src={`/images/${product.name}.png`}
              width={150}
              height={100}
            />
            <div className={styles.productsContainer}>
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
                {Number(product.price) * Number(product.quantity)}{' '}
                <span>EUR </span>{' '}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
