import Image from 'next/image';
import Link from 'next/link';
import { FaQuestionCircle } from 'react-icons/fa';
import { getProducts } from '../../database/products';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';
import styles from './page.module.scss';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Checkout',
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

  const numberOfProducts = cookies.length;

  const subTotalSum = 18.0;
  const discount = 5.0;
  const totalSumWithDiscount = 9.0;

  return (
    <main>
      <div className={styles.container}>
        <h1>Checkout</h1>
        <div className={styles.containerCardProducts}>
          <div className={styles.containerCheckout}>
            <div>
              <h2>Contact Information</h2> <FaQuestionCircle />
            </div>
            <form>
              <div className={styles.flex}>
                <label>
                  <input
                    data-test-id="checkout-first-name"
                    name="firstName"
                    placeholder="First name"
                  />
                </label>
                <label>
                  <input
                    data-test-id="checkout-last-name"
                    name="lastName"
                    placeholder="Last name"
                  />
                </label>
              </div>
              <label>
                <input
                  data-test-id="checkout-email"
                  name="email"
                  placeholder="Email"
                />
              </label>
              <label>
                <input
                  data-test-id="checkout-address"
                  name="address"
                  placeholder="Address"
                />
              </label>
              <label>
                <input
                  data-test-id="checkout-city"
                  name="city"
                  placeholder="City"
                />
              </label>
              <label>
                <input
                  data-test-id="checkout-postal-code"
                  name="postalCode"
                  placeholder="Postal code"
                />
              </label>
              <label>
                <input data-test-id="checkout-country" placeholder="Country" />
              </label>
              <label>
                <input
                  data-test-id="checkout-credit-card"
                  name="creditCard"
                  placeholder="Credit card"
                />
              </label>
              <label>
                <input
                  data-test-id="checkout-expiration-date"
                  name="expirationDate"
                  placeholder="Expiration date"
                />
              </label>
              <label>
                <input
                  data-test-id="checkout-security-code"
                  name="securityCode"
                  placeholder="Security code"
                />
              </label>
              <label>
                <input
                  data-test-id="checkout-security-code"
                  name="securityCode"
                  placeholder="Security code"
                />
              </label>
              <Link
                data-test-id="checkout-confirm-order"
                className={styles.button}
                href="/thank"
                style={{
                  textDecoration: 'none',
                }}
              >
                Confirm Order
              </Link>
            </form>
          </div>
          <div className={styles.sumContainer}>
            <div>
              <h2>Order Summary</h2>
              <div className={styles.subtotal}>
                <h5>Subtotal</h5>
                <p>{subTotalSum} EUR</p>
              </div>
              <div className={styles.subtotal}>
                <h5>Discounts</h5>
                <p>{discount} EUR</p>
              </div>
              <div className={styles.total}>
                <h3>Total</h3>
                <p>
                  <span>{totalSumWithDiscount}</span> EUR
                </p>
              </div>
              <Link
                data-test-id="product-add-to-cart"
                className={styles.button}
                href="/#"
                style={{
                  color: 'black',
                  textDecoration: 'none',
                }}
              >
                APPLY A PROMO CODE OR DISCOUNT
              </Link>
              <div className={styles.productsCardsContainer}>
                <h2>In your cart ({numberOfProducts})</h2>
                {filteredProducts.map((product) => {
                  return (
                    <div
                      key={`product-div-${product.id}`}
                      className={styles.productCard}
                    >
                      <Image
                        className={styles.img}
                        src={`/images/${product.name}.png`}
                        width={150}
                        height={100}
                      />
                      <div className={styles.productsContainer}>
                        <Link
                          className={styles.productName}
                          href={`/products/${product.id}`}
                          style={{
                            textDecoration: 'none',
                          }}
                        >
                          {product.name}
                        </Link>
                        <p className={styles.productType}>{product.type}</p>
                        <p className={styles.productPrice}>
                          {Number(product.price) * Number(product.quantity)}{' '}
                          <span>EUR </span>{' '}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
