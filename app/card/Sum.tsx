import Link from 'next/link';
import { getProducts } from '../../database/products';
import { Product } from '../../migrations/1684934780-createTableProducts';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';
import { cardSum } from './cardSum';
import { ProductWithQuantity } from './page';
import styles from './Sum.module.scss';

export default async function TotalSum() {
  const products = await getProducts();
  const valueCookies = getCookie('cart'); // This a string
  let total = 0;

  const cookies = !valueCookies ? [] : parseJson(valueCookies); // this is an array

  const itemInCart: ProductWithQuantity[] = products.map(
    (product: Product): ProductWithQuantity => {
      const matchingItems = cookies?.find(
        (cookieItem) => product.id === cookieItem.id,
      );

      return { ...product, quantity: matchingItems?.quantity };
    },
  );

  const filteredProducts: ProductWithQuantity[] = itemInCart.filter(
    (item: ProductWithQuantity) => item.quantity,
  );

  return (
    <div data-test-id="cart-total" className={styles.sumContainer}>
      <h2>Summary Of The Amount</h2>
      {filteredProducts.map((product: ProductWithQuantity) => {
        const newSubTotal: number =
          Number(product.price) * Number(product.quantity);
        total = cardSum(total, newSubTotal);
        return (
          <div key={`product-div-${product.id}`}>
            <div className={styles.subtotal}>
              <h5>{product.name}</h5>
              <p>{Number(product.price) * Number(product.quantity)} EUR</p>
            </div>
          </div>
        );
      })}
      <div className={styles.total}>
        <h3>Total</h3>
        <p>
          <span>{total}</span> EUR
        </p>
      </div>
      <Link
        data-test-id="cart-checkout"
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
  );
}
