import Image from 'next/image';
import Link from 'next/link';
import { FaQuestion, FaQuestionCircle } from 'react-icons/fa';
import { products } from '../../database/products';
// import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import Image from 'next/image';
// import Link from 'next/link';
// import { notFound } from 'next/navigation';
// import { getProductById, products } from '../../database/products';
// import QuantityCounter from '../../util/counter';
import image from '../../public/images/CapsuBrew Delight.png';
import QuantityCounter from '../products/[productId]/QuantityCounter';
import styles from './page.module.scss';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Checkout',
  description: 'Checkout your cart with the products',
};

export default function CheckoutPage() {
  return (
    <main>
      <div className={styles.container}>
        <h1>Checkout</h1>
        <div className={styles.containerCardProducts}>
          <div className={styles.containerCheckout}>
            <div>
              <h2>Shopping Address</h2> <FaQuestionCircle />
            </div>
            <form>
              <div className={styles.flex}>
                <input
                  data-test-id="checkout-first-name"
                  type="text"
                  id="fname"
                  name="firstName"
                  placeholder="First name"
                />
                <input
                  data-test-id="checkout-last-name"
                  type="text"
                  id="lname"
                  name="lastName"
                  placeholder="Last name"
                />
              </div>
              <input
                data-test-id="checkout-email"
                type="email"
                id="email"
                name="email"
                placeholder="Email"
              />
              <input
                data-test-id="checkout-address"
                type="text"
                id="address"
                name="address"
                placeholder="Address"
              />
              <input
                data-test-id="checkout-city"
                type="text"
                id="city"
                name="city"
                placeholder="City"
              />
              <input
                data-test-id="checkout-postal-code"
                type="text"
                id="postalCode"
                name="postalCode"
                placeholder="Postal code"
              />
              <input
                data-test-id="checkout-country"
                type="text"
                id="country"
                name="country"
                placeholder="Country"
              />
              <input
                data-test-id="checkout-credit-card"
                type="number"
                id="creditCard"
                name="creditCard"
                placeholder="Credit card"
              />
              <input
                data-test-id="checkout-expiration-date"
                type="number"
                id="expirationDate"
                name="expirationDate"
                placeholder="Expiration date"
              />
              <input
                data-test-id="checkout-security-code"
                type="number"
                id="securityCode"
                name="securityCode"
                placeholder="Security code"
              />
              <input
                data-test-id="checkout-security-code"
                type="number"
                id="securityCode"
                name="securityCode"
                placeholder="Security code"
              />
              <Link
                data-test-id="checkout-confirm-order"
                className={styles.button}
                href="/#"
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
                <p>18 Euro</p>
              </div>
              <div className={styles.total}>
                <h3>Total</h3>
                <p>
                  <span>18</span> Euro
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
            </div>
            <div className={styles.productsCardsContainer}>
              {products
                .map((product) => {
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
                      <div>
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
                          {product.price} <span>Euro</span>{' '}
                        </p>
                      </div>
                    </div>
                  );
                })
                .splice(0, 3)}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
