'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { createOrUpdateQuantity } from './actions';
import styles from './QuantityCounter.module.scss';

export default function QuantityCounter(props) {
  console.log({ props });
  const [quantity, setQuantity] = useState(1);
  const router = useRouter();

  // const decrementQuantity = () => {
  //   if (quantity > 1) {
  //     setQuantity(quantity - 1);
  //   }
  // };

  // const incrementQuantity = () => {
  //   setQuantity(quantity + 1);
  // };

  return (
    <form className={styles.quantity}>
      <div className={styles.quantityCounter}>
        {/* <FaArrowLeft onClick={decrementQuantity} className={styles.icon} /> */}

        <input
          className={styles.quantityValue}
          value={quantity}
          type="number"
          min="1"
          data-test-id="product-quantity"
          onChange={(e) => setQuantity(parseInt(e.target.value))}
        />

        {/* <FaArrowRight onClick={incrementQuantity} className={styles.icon} /> */}
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
