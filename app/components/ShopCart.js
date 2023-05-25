import Link from 'next/link';
import { FaShoppingCart } from 'react-icons/fa';
import BadgePage from './Badge';
import styles from './ShopCart.module.scss';

export default function ShopCartPage() {
  return (
    <div className={styles.container}>
      <Link
        data-test-id="cart-link"
        href="/card"
        style={{
          color: 'black',
          textDecoration: 'none',
          position: 'relative',
        }}
      >
        <div className={styles.shopCart}>
          <FaShoppingCart className={styles.icon} />
        </div>
        <div className={styles.badge}>
          <BadgePage />
        </div>
      </Link>
    </div>
  );
}
