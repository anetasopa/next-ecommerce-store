import { products } from '../../database/products';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';
import styles from './SubTotalSum.module.scss';

export default function SubTotalSum() {
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
    <>
      {filteredProducts.map((product) => {
        return (
          <div key={`product-div-${product.id}`}>
            {' '}
            <div className={styles.subtotal}>
              <h5>{product.name}</h5>
              <p>{Number(product.price) * Number(product.quantity)} Eur</p>
            </div>
            {/* <div className={styles.total}>
              <h3>Total</h3>
              <p>
                <span>
                  {Number(product.price) * Number(product.quantity)} +{' '}
                  {Number(product.price) * Number(product.quantity)}
                </span>{' '}
                Eur
              </p>
            </div> */}
          </div>
        );
      })}
    </>
  );
}
