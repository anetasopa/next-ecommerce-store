import Image from 'next/image';
import Link from 'next/link';
import { FaQuestionCircle } from 'react-icons/fa';
import { getProducts } from '../../database/products';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';
import CheckoutForm from './CheckoutForm';
import styles from './page.module.scss';
import SelectProducts from './SelectProducts';
import Summary from './Summary';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Checkout | Coffez',
  description: 'Checkout your cart with the products',
};

export default async function CheckoutPage() {
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
  console.log({ filteredProducts });

  const numberOfProducts = cookies.length;

  const subTotalPrice = filteredProducts.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  const discount = 5;

  const totalPrice = subTotalPrice - discount;

  return (
    <main>
      <div className={styles.container}>
        <h1>Checkout</h1>
        <div className={styles.containerCardProducts}>
          <div className={styles.containerCheckout}>
            <CheckoutForm />
          </div>
          <Summary
            subTotalPrice={subTotalPrice}
            discount={discount}
            totalPrice={totalPrice}
            filteredProducts={filteredProducts}
            numberOfProducts={numberOfProducts}
          />
        </div>
      </div>
    </main>
  );
}
