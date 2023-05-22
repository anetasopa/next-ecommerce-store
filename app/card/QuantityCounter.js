'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaTrash } from 'react-icons/fa';
import { addQuantity, createOrUpdateQuantity, removeQuantity } from './actions';
import styles from './QuantityCounter.module.scss';

export default function QuantityCounter({ product }) {
  const router = useRouter();

  // const removeQuantity = () => {
  //   if (quantity > 1) {
  //     setQuantity(quantity - 1);
  //   }
  // };

  // const addQuantity = () => {
  //   setQuantity(quantity + 1);
  // };
  console.log(typeof product.quantity);

  return (
    <form className={styles.quantity}>
      <div className={styles.quantityCounter}>
        <button
          formAction={async () => {
            router.refresh();
            await removeQuantity(product);
          }}
          className={styles.buttonRemove}
        >
          <FaArrowLeft className={styles.icon} />
        </button>

        <span className={styles.quantityValue}>{product.quantity}</span>

        <button
          formAction={async () => {
            router.refresh();
            await addQuantity(product.productId, product.quantity);
          }}
          className={styles.buttonRemove}
        >
          <FaArrowRight className={styles.icon} />
        </button>
      </div>

      <button
        formAction={async () => {
          router.refresh();
          // await createOrUpdateQuantity(props.productId, quantity);
        }}
        data-test-id="product-add-to-cart"
        className={styles.button}
      >
        Remove
      </button>

      {/* <FaTrash /> */}

      {/* <button
        formAction={async () => {
          router.refresh();
          await createOrUpdateQuantity(props.productId, quantity);
        }}
      >
        Update Quantity
      </button> */}
    </form>
  );
}
