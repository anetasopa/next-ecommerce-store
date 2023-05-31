'use client';
import { useRouter } from 'next/navigation';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { addQuantity, removeItem, removeQuantity } from './actions';
import { ProductWithQuantity } from './page';
import styles from './QuantityCounter.module.scss';

type Props = {
  product: ProductWithQuantity;
};

export default function QuantityCounter(props: Props) {
  const product: ProductWithQuantity = props.product;

  const router = useRouter();
  const item = { id: product.id, quantity: product.quantity };

  return (
    <form className={styles.quantity}>
      <div className={styles.quantityCounter}>
        <button
          data-test-id={`cart-product-remove-${item.id}`}
          formAction={async () => {
            router.refresh();
            await removeQuantity(item);
          }}
          className={styles.button}
        >
          <FaArrowLeft className={styles.icon} />
        </button>

        <span
          data-test-id={`cart-product-quantity-${item.id}`}
          className={styles.quantityValue}
        >
          {item.quantity}
        </span>

        <button
          formAction={async () => {
            router.refresh();
            await addQuantity(item);
          }}
          className={styles.button}
        >
          <FaArrowRight className={styles.icon} />
        </button>
      </div>

      <button
        formAction={async () => {
          router.refresh();
          await removeItem(item);
        }}
        data-test-id={`cart-product-remove-${item.id}`}
        className={styles.buttonRemove}
      >
        Remove
      </button>
    </form>
  );
}
