import Link from 'next/link';
import { FaCoffee } from 'react-icons/fa';
import styles from './Nav.module.scss';
import ShopCartPage from './ShopCart';

export default function Nav() {
  return (
    <header className={styles.header}>
      <nav>
        <div>
          <Link href="/" className={styles.logo}>
            Cofeez <FaCoffee />
          </Link>
        </div>
        <ul>
          <li>
            <Link
              href="/"
              style={{
                color: 'black',
                textDecoration: 'none',
              }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/products"
              style={{
                color: 'black',
                textDecoration: 'none',
              }}
            >
              Products
            </Link>
          </li>
          <li>
            <ShopCartPage />
          </li>
        </ul>
      </nav>
    </header>
  );
}
