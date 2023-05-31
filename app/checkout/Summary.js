import Link from 'next/link';
import SelectProducts from './SelectProducts';
import styles from './Summary.module.scss';

export default function Summary({
  subTotalPrice,
  discount,
  totalPrice,
  filteredProducts,
  numberOfProducts,
}) {
  return (
    <div className={styles.sumContainer}>
      <div>
        <h2>Order Summary</h2>
        <div className={styles.subtotal}>
          <h5>Subtotal</h5>
          <p>{subTotalPrice} EUR</p>
        </div>
        <div className={styles.subtotal}>
          <h5>{discount}</h5>
          <p>5 EUR</p>
        </div>
        <div className={styles.total}>
          <h3>Total</h3>
          <p>
            <span>{totalPrice}</span> EUR
          </p>
        </div>
        <Link
          data-test-id="product-add-to-cart"
          className={styles.buttonDiscount}
          href="/#"
          style={{
            color: 'black',
            textDecoration: 'none',
          }}
        >
          APPLY A PROMO CODE OR DISCOUNT
        </Link>
        <SelectProducts
          filteredProducts={filteredProducts}
          numberOfProducts={numberOfProducts}
        />
      </div>
    </div>
  );
}
