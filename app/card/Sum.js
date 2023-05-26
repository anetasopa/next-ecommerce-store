import Link from 'next/link';
import { getProductById, getProducts } from '../../database/products';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';
import styles from './Sum.module.scss';

export default async function TotalSum() {
  const products = await getProducts();
  const valueCookies = getCookie('cart'); // This a string
  let total = 0;

  const cookies = !valueCookies ? [] : parseJson(valueCookies); // this is an array

  const itemInCart = products.map((product) => {
    const matchingItems = cookies.find(
      (cookieItem) => product.id === cookieItem.id,
    );

    return { ...product, quantity: matchingItems?.quantity };
  });

  const filteredProducts = itemInCart.filter((item) => item.quantity);

  return (
    <div data-test-id="cart-total" className={styles.sumContainer}>
      <h2>Summary Of The Amount</h2>
      {filteredProducts.map((product) => {
        total = total + Number(product.price) * Number(product.quantity);
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
