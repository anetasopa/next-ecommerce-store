import { getCookie } from '../util/cookies';
import { parseJson } from '../util/json';
import styles from './Banner.module.scss';

export default function BannerPage() {
  const valueCartCookie = getCookie('cart'); // This a string
  const values = !valueCartCookie ? [] : parseJson(valueCartCookie); // this is an array

  const quantity = values.map((value) => value.quantity);
  const totalQuantity = quantity.reduce((acc, curr) => acc + curr, 0);

  return (
    <h1 className={`${totalQuantity === 0 ? styles.hide : ''}`}>
      {totalQuantity}
    </h1>
  );
}
