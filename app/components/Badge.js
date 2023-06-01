import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';
import styles from './Badge.module.scss';

export default function BadgePage() {
  const valueCartCookie = getCookie('cart'); // This a string
  const values = !valueCartCookie ? [] : parseJson(valueCartCookie); // this is an array

  const quantity = values.map((value) => value.quantity);
  const totalQuantity = quantity.reduce((acc, curr) => acc + curr, 0);

  return (
    <div data-test-id="cart-count">
      <span className={styles.textCount}>{totalQuantity}</span>
    </div>
  );
}
