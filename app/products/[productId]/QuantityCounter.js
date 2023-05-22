'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { createOrUpdateQuantity } from './actions';
import styles from './QuantityCounter.module.scss';

export default function QuantityCounter(props) {
  const [quantity, setQuantity] = useState(1);
  const router = useRouter();

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <form className={styles.quantity}>
      <div className={styles.quantityCounter}>
        <FaArrowLeft onClick={decrementQuantity} className={styles.icon} />
        <input
          type=""
          className={styles.quantityInput}
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value))}
        />
        <FaArrowRight onClick={incrementQuantity} className={styles.icon} />
      </div>
      <button
        formAction={async () => {
          router.refresh();
          await createOrUpdateQuantity(props.productId, quantity);
        }}
        data-test-id="product-add-to-cart"
        className={styles.button}
      >
        Add To Card
      </button>
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
