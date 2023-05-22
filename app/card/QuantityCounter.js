'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaTrash } from 'react-icons/fa';
import { addQuantity, removeItem, removeQuantity } from './actions';
import styles from './QuantityCounter.module.scss';

export default function QuantityCounter({ product }) {
  const router = useRouter();

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
            await addQuantity(product);
          }}
          className={styles.buttonRemove}
        >
          <FaArrowRight className={styles.icon} />
        </button>
      </div>
      <button
        formAction={async () => {
          router.refresh();
          await removeItem(product);
        }}
        data-test-id={`cart-product-remove-${product.id}`}
        className={styles.button}
      >
        Remove
      </button>
    </form>
  );
}
