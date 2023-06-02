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
  const sum = subTotalPrice === 0 ? totalPrice === 0 : totalPrice;

  return (
    <div className={styles.sumContainer}>
      <div>
        <h2>Order Summary</h2>
        <div className={styles.subtotal}>
          <h5>Subtotal</h5>
          <p>{subTotalPrice} EUR</p>
        </div>
        <div className={styles.subtotal}>
          <h5>Discount</h5>
          <p>{discount} EUR</p>
        </div>
        <div className={styles.total}>
          <h3>Total</h3>
          <p>
            <span>{sum}</span> EUR
          </p>
        </div>
        {/* <Link
          data-test-id="product-add-to-cart"
          className={styles.buttonDiscount}
          href="/#"
          style={{
            color: 'black',
            textDecoration: 'none',
          }}
        >
          APPLY A PROMO CODE OR DISCOUNT
        </Link> */}
        <SelectProducts
          filteredProducts={filteredProducts}
          numberOfProducts={numberOfProducts}
        />
      </div>
    </div>
  );
}
