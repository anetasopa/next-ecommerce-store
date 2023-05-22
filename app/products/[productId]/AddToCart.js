'use client';
import { useRouter } from 'next/navigation';
import { createOrUpdateQuantity } from './actions';
import styles from './Cart.module.scss';

export default function AddToCart(props) {
  const router = useRouter();

  return (
    <form>
      <button
        formAction={async () => {
          router.refresh();
          await createOrUpdateQuantity(props.productId, quantity);
        }}
        data-test-id="product-add-to-cart"
        className={styles.button}
        style={{
          color: 'black',
          textDecoration: 'none',
        }}
      >
        Add To Card
      </button>
    </form>
  );
}
