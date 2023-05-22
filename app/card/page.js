import Image from 'next/image';
import Link from 'next/link';
import { products } from '../../database/products';
import styles from './page.module.scss';
import QuantityCounter from './QuantityCounter';

export const dynamic = 'force-dynamic';

export default function CardPage() {
  return (
    <main>
      <div className={styles.container}>
        <h1>Products Card</h1>
        <div className={styles.containerCardProducts}>
          <div className={styles.productsCardsContainer}>
            {products
              .map((product) => {
                return (
                  <div
                    key={`product-div-${product.id}`}
                    className={styles.productCard}
                  >
                    <Image
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
                        {product.price} <span>Euro</span>{' '}
                      </p>
                      <QuantityCounter />
                    </div>
                  </div>
                );
              })
              .splice(0, 3)}
          </div>
          <div className={styles.sumContainer}>
            <h2>Summary Of The Amount</h2>
            <div className={styles.subtotal}>
              <h5>Subtotal</h5>
              <p>18 Euro</p>
            </div>
            <div className={styles.total}>
              <h3>Total</h3>
              <p>
                <span>18</span> Euro
              </p>
            </div>
            <Link
              data-test-id="product-add-to-cart"
              className={styles.button}
              href="/checkout"
              style={{
                color: 'black',
                textDecoration: 'none',
              }}
            >
              Checkout
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
