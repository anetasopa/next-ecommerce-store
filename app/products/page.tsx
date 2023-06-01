import Image from 'next/image';
import Link from 'next/link';
import { getProducts } from '../../database/products';
import Filter from './Filter';
import styles from './page.module.scss';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Product Overview | Coffez',
  description: 'Products',
};

export default async function ProductPage() {
  const products = await getProducts();

  return (
    <main className={styles.containerOverview}>
      <h1>Products</h1>
      <Filter products={products} />
      {/* <div className={styles.productsCardsContainer}>
        {filteredProducts.map((product) => {
          return (
            <div
              key={`product-div-${product.id}`}
              className={styles.productCard}
            >
              <div className={styles.container}>
                <Image
                  alt=""
                  data-test-id="product-image"
                  src={`/images/${product.name}.png`}
                  width={250}
                  height={200}
                />
                <div className={styles.overlay}> </div>
                <div className={styles.button}>
                  <Link
                    data-test-id={`product-${product.id}`}
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
                data-test-id={`product-${product.id}`}
                className={styles.productName}
                href={`/products/${product.id}`}
                style={{
                  textDecoration: 'none',
                }}
              >
                {product.name}
              </Link>
              <p className={styles.productType}>{product.type}</p>
              <p data-test-id="product-price" className={styles.productPrice}>
                {Number(product.price)}
                <span> EUR</span>
              </p>
            </div>
          );
        })}
      </div> */}
    </main>
  );
}
