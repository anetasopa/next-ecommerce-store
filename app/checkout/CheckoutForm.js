'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FaExclamationCircle } from 'react-icons/fa';
import * as Yup from 'yup';
import styles from './CheckoutForm.module.scss';

const renderError = (error, key) => {
  const errorName = error?.inner?.find((e) => e.path === key);

  if (!errorName) {
    return null;
  }

  return (
    <div className={styles.errorContainer}>
      <p className={styles.errorMessage}>{errorName.message}</p>{' '}
      <FaExclamationCircle className={styles.icon} />
    </div>
  );
};

function contactInformation(
  firstName,
  setFirstName,
  lastName,
  setLastName,
  email,
  setEmail,
  error,
) {
  return (
    <>
      <div className={styles.containerText}>
        <h2 className={styles.contactInformationText}>Contact Information</h2>{' '}
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
          {renderError(error, 'firstName')}
        </label>
        <label className={styles.labelFlex}>
          <input
            data-test-id="checkout-last-name"
            value={lastName}
            placeholder="Last Name"
            className={styles.input}
            onChange={(event) => setLastName(event.currentTarget.value)}
          />
          {renderError(error, 'lastName')}
        </label>
      </div>
      <label>
        <input
          className={styles.input}
          value={email}
          data-test-id="checkout-email"
          placeholder="customer@email.com"
          onChange={(event) => setEmail(event.currentTarget.value)}
        />
        {renderError(error, 'email')}
      </label>
    </>
  );
}

function shoppingInformation(
  address,
  setAddress,
  city,
  setCity,
  postCode,
  setPostCode,
  country,
  setCountry,
  error,
) {
  return (
    <>
      <h2 className={styles.shippingInformationText}>Shipping Information</h2>
      <label>
        <input
          className={styles.input}
          data-test-id="checkout-address"
          value={address}
          placeholder="Address"
          onChange={(event) => setAddress(event.currentTarget.value)}
        />
        {renderError(error, 'address')}
      </label>
      <div className={styles.addressContainer}>
        <label className={styles.labelFlex}>
          <input
            className={`${styles.input} ${styles.city}`}
            data-test-id="checkout-city"
            value={city}
            placeholder="City"
            onChange={(event) => setCity(event.currentTarget.value)}
          />
          {renderError(error, 'city')}
        </label>
        <label className={styles.labelFlex}>
          <input
            className={`${styles.input} ${styles.city}`}
            data-test-id="checkout-postal-code"
            value={postCode}
            placeholder="Post Code"
            onChange={(event) => setPostCode(event.currentTarget.value)}
          />
          {renderError(error, 'postCode')}
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
        {renderError(error, 'country')}
      </label>
    </>
  );
}

function paymentInformation(
  creditCard,
  setCreditCard,
  expiration,
  setExpiration,
  securityCode,
  setSecurityCode,
  error,
) {
  return (
    <>
      <h2 className={styles.paymentInformationText}>Payment Information</h2>
      <label>
        <input
          className={styles.input}
          data-test-id="checkout-credit-card"
          value={creditCard}
          placeholder="Credit Card Number"
          onChange={(event) => setCreditCard(event.currentTarget.value)}
        />
        {renderError(error, 'creditCard')}
      </label>
      <div className={styles.paymentInfo}>
        <label className={styles.labelFlex}>
          <input
            className={`${styles.input} ${styles.card} ${styles.data}`}
            // type="date"
            data-test-id="checkout-expiration-date"
            placeholder="05/25"
            value={expiration}
            onChange={(event) => setExpiration(event.currentTarget.value)}
          />
          {renderError(error, 'expiration')}
        </label>
        <label className={styles.labelFlex}>
          <input
            className={`${styles.input} ${styles.card}`}
            data-test-id="checkout-security-code"
            placeholder="Security Code"
            value={securityCode}
            onChange={(event) => setSecurityCode(event.currentTarget.value)}
          />
          {renderError(error, 'securityCode')}
        </label>
      </div>
    </>
  );
}

function confirmButton(router, error) {
  console.log({ error });
  return (
    <button
      data-test-id="checkout-confirm-order"
      className={styles.button}
      onClick={() => router.push('/thank')}
      // onClick={error ? () => router.push('/thank') : null}
      // disabled={!isValid}
    >
      Confirm Order
    </button>
  );
}

const formValidationSchema = Yup.object().shape({
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  email: Yup.string().email().required(),
  address: Yup.string().required(),
  postCode: Yup.string().required(),
  city: Yup.string().required(),
  country: Yup.string().required(),
  creditCard: Yup.string().required(),
  expiration: Yup.string().trim().required(),
  securityCode: Yup.string().required(),
});

export default function CheckoutForm() {
  const router = useRouter();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [postCode, setPostCode] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [creditCard, setCreditCard] = useState('');
  const [expiration, setExpiration] = useState('');
  const [securityCode, setSecurityCode] = useState('');
  const [error, setError] = useState();

  const handleClick = (event) => {
    event.preventDefault();

    try {
      // const result = formValidationSchema.validateSync({
      //   firstName,
      //   lastName,
      //   email,
      //   address,
      //   // postCode,
      //   // city,
      //   // country,
      //   // creditCard,
      //   // expiration,
      //   // securityCode,
      // });

      setError(null);
      formValidationSchema.validateSync(
        {
          firstName,
          lastName,
          email,
          address,
          postCode,
          city,
          country,
          creditCard,
          expiration,
          securityCode,
        },
        { abortEarly: false },
      );
    } catch (e) {
      setError(e);
    }
  };

  return (
    <form onSubmit={handleClick}>
      {contactInformation(
        firstName,
        setFirstName,
        lastName,
        setLastName,
        email,
        setEmail,
        error,
      )}
      <div>
        {shoppingInformation(
          address,
          setAddress,
          city,
          setCity,
          postCode,
          setPostCode,
          country,
          setCountry,
          error,
        )}
      </div>
      <div>
        {paymentInformation(
          creditCard,
          setCreditCard,
          expiration,
          setExpiration,
          securityCode,
          setSecurityCode,
          error,
        )}
      </div>
      {confirmButton(router, error)}
    </form>
  );
}
