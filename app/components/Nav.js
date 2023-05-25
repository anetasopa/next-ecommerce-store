import Link from 'next/link';
import { FaCoffee } from 'react-icons/fa';
import ShopCartPage from '../ShopCart';
import styles from './Nav.module.scss';

export default function Nav() {
  return (
    <header className={styles.header}>
      <nav>
        <div>
          <Link
            href="/"
            style={{
              color: 'black',
              textDecoration: 'none',
              fontSize: '1.5rem',
              marginLeft: '50px',
            }}
          >
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
