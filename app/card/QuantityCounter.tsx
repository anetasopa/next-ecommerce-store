'use client';
import { useRouter } from 'next/navigation';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { addQuantity, removeItem, removeQuantity } from './actions';
import styles from './QuantityCounter.module.scss';

type Product = {
  id: number;
  quantity: number;
};

export default function QuantityCounter(product: Product) {
  const router = useRouter();

  return (
    <form className={styles.quantity}>
      <div className={styles.quantityCounter}>
        <button
          data-test-id={`cart-product-remove-${product.id}`}
          formAction={async () => {
            router.refresh();
            await removeQuantity(product);
          }}
          className={styles.button}
        >
          <FaArrowLeft className={styles.icon} />
        </button>

        <span
          data-test-id={`cart-product-quantity-${product.id}`}
          className={styles.quantityValue}
        >
          {product.quantity}
        </span>

        <button
          formAction={async () => {
            router.refresh();
            await addQuantity(product);
          }}
          className={styles.button}
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
        className={styles.buttonRemove}
      >
        Remove
      </button>
    </form>
  );
}