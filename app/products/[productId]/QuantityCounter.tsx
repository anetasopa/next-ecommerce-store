'use client';

import { useRouter } from 'next/navigation';
import { ChangeEvent, useState } from 'react';
import { createOrUpdateQuantity } from './actions';
import styles from './QuantityCounter.module.scss';

type Props = {
  productId: number;
};

export default function QuantityCounter(props: Props) {
  const [quantity, setQuantity] = useState(1);
  const router = useRouter();

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setQuantity(Number(event.currentTarget.value));
  }

  return (
    <form className={styles.quantity}>
      <div className={styles.quantityCounter}>
        <input
          className={styles.quantityValue}
          value={quantity}
          type="number"
          min="1"
          data-test-id="product-quantity"
          onChange={handleChange}
        />
      </div>
      <button
        className={styles.button}
        data-test-id="product-add-to-cart"
        formAction={async () => {
          router.refresh();
          await createOrUpdateQuantity(props.productId, quantity);
        }}
      >
        Add To Card
      </button>
    </form>
  );
}
