import Link from 'next/link';
import { getProducts } from '../../database/products';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';
import styles from './Sum.module.scss';

export default async function TotalSum() {
  const products = await getProducts();
  const valueCookies = getCookie('cart'); // This a string

  const cookies = !valueCookies ? [] : parseJson(valueCookies); // this is an array

  const itemInCart = products.map((product) => {
    const matchingItems = cookies.find(
      (cookieItem) => product.id === cookieItem.id,
    );

    return { ...product, quantity: matchingItems?.quantity };
  });

  const filteredProducts = itemInCart.filter((item) => item.quantity);

  return (
    <div className={styles.sumContainer}>
      <h2>Summary Of The Amount</h2>
      {filteredProducts.map((product) => {
        return (
          <div key={`product-div-${product.id}`}>
            {' '}
            <div className={styles.subtotal}>
              <h5>{product.name}</h5>
              <p>{Number(product.price) * Number(product.quantity)} Eur</p>
            </div>
          </div>
        );
      })}
      <div className={styles.total}>
        <h3>Total</h3>
        <p>
          <span>18</span> Eur
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
  );
}