'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FaQuestionCircle } from 'react-icons/fa';
import styles from './CheckoutForm.module.scss';

export default function CheckoutForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [adress, setAdress] = useState('');
  const [postCode, setPostCode] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [creditCard, setCreditCard] = useState('');
  const [expiration, setExpiration] = useState('');
  const [securityCode, setSecurityCode] = useState('');

  const handleClick = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleClick}>
      <div className={styles.containerText}>
        <h2 className={styles.contactInformationText}>Contact Information</h2>{' '}
        <FaQuestionCircle className={styles.icon} />
      </div>
      <div className={styles.nameContainer}>
        <label className={styles.labelFlex}>
          <input
            data-test-id="checkout-first-name"
            value={firstName}
            placeholder="First name"
            className={styles.input}
            onChange={(event) => setFirstName(event.currentTarget.value)}
          />
          {/* <div className={styles.underline}></div> */}
        </label>
        <label className={styles.labelFlex}>
          <input
            data-test-id="checkout-last-name"
            value={lastName}
            placeholder="Last name"
            className={styles.input}
            onChange={(event) => setLastName(event.currentTarget.value)}
          />
        </label>
      </div>
      <label>
        <input
          className={styles.input}
          type="email"
          value={email}
          data-test-id="checkout-email"
          placeholder="customer@email.com"
          onChange={(event) => setEmail(event.currentTarget.value)}
        />
      </label>
      <div>
        <h2 className={styles.shippingInformationText}>Shipping Information</h2>
        <label>
          <input
            className={styles.input}
            data-test-id="checkout-address"
            value={adress}
            placeholder="Address"
            onChange={(event) => setAdress(event.currentTarget.value)}
          />
        </label>
        <div className={styles.addressContainer}>
          <label className={styles.labelFlex}>
            <input
              className={`${styles.input} ${styles.city}`}
              data-test-id="checkout-city"
              value={city}
              placeholder="City"
              onChange={(event) => setPostCode(event.currentTarget.value)}
            />
          </label>
          <label className={styles.labelFlex}>
            <input
              className={`${styles.input} ${styles.city}`}
              data-test-id="checkout-postal-code"
              value={postCode}
              placeholder="Post Code"
              onChange={(event) => setCity(event.currentTarget.value)}
            />
          </label>
        </div>
        <label>
          <input
            className={styles.input}
            data-test-id="checkout-country"
            value={country}
            placeholder="Country"
            onChange={(event) => setCountry(event.currentTarget.value)}
          />
        </label>
      </div>
      <div>
        <h2 className={styles.paymentInformationText}>Payment Information</h2>
        <label>
          <input
            className={styles.input}
            data-test-id="checkout-credit-card"
            value={creditCard}
            placeholder="Credit Card Number"
            onChange={(event) => setCreditCard(event.currentTarget.value)}
          />
        </label>
        <div className={styles.paymentInfo}>
          <label className={styles.labelFlex}>
            <input
              className={`${styles.input} ${styles.card} ${styles.data}`}
              type="date"
              data-test-id="checkout-expiration-date"
              placeholder="05/26"
              value={expiration}
              onChange={(event) => setExpiration(event.currentTarget.value)}
            />
          </label>
          <label className={styles.labelFlex}>
            <input
              className={`${styles.input} ${styles.card}`}
              data-test-id="checkout-security-code"
              placeholder="Security Code"
              value={securityCode}
              onChange={(event) => setSecurityCode(event.currentTarget.value)}
            />
          </label>
        </div>
      </div>
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
  );
}
