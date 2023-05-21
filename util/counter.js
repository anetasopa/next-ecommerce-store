'use client';
import { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import styles from './styles.module.scss';

export default function QuantityCounter() {
  const [quantity, setQuantity] = useState(1);

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className={styles.quantity}>
      <FaArrowLeft onClick={decrementQuantity} className={styles.icon} />
      <input
        type="number"
        className={styles.quantityInput}
        value={quantity}
        onChange={(e) => setQuantity(parseInt(e.target.value))}
      />
      <FaArrowRight onClick={incrementQuantity} className={styles.icon} />
    </div>
  );
}
