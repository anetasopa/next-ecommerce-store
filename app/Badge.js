import { getCookie } from '../util/cookies';
import { parseJson } from '../util/json';
import styles from './Badge.module.scss';

export default function BadgePage() {
  const valueCartCookie = getCookie('cart'); // This a string
  const values = !valueCartCookie ? [] : parseJson(valueCartCookie); // this is an array

  const quantity = values.map((value) => value.quantity);
  const totalQuantity = quantity.reduce((acc, curr) => acc + curr, 0);

  return (
    <div>
      <div className={`${totalQuantity === 0 ? styles.hide : 0}`}>
        <span className={styles.span}>{totalQuantity}</span>
      </div>
    </div>
  );
}
