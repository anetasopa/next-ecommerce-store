import { FaEnvelope, FaLocationArrow, FaPhone } from 'react-icons/fa';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.contactUs}>
        <h6>Contact Us</h6>
        <ul>
          <li className={styles.li}>
            <FaLocationArrow className={styles.icon} />
            <p>
              {' '}
              1001 Antoker Isle Apt. 896, Coffee Cafe Center, Melonilie 1001,
              Vienna.
            </p>
          </li>
          <li className={styles.li}>
            <FaPhone className={styles.icon} />
            <p>+(43)-665-999-8888</p>
          </li>
          <li className={styles.li}>
            <FaEnvelope className={styles.icon} />
            <p>coffeez@gmail.com</p>
          </li>
        </ul>
      </div>

      <div className={styles.newsletter}>
        <h6>Newsletter</h6>
        <p>Would be get the latest news</p>
        <form>
          <input type="email" name="email" placeholder="Email" />
          <button>
            <FaEnvelope className={styles.icon} />
          </button>
        </form>
        <p>Subscribe and get our weekly newsletter</p>
        <p>We will be very grateful!</p>
      </div>

      <div className={styles.quickLinks}>
        <h6>Quick Links</h6>
        <ul>
          <li className={styles.li}>
            <p>Home</p>
          </li>
          <li className={styles.li}>
            <p>About Us</p>
          </li>
          <li className={styles.li}>
            <p>Benefits</p>
          </li>
          <li className={styles.li}>
            <p>Hours</p>
          </li>
        </ul>
      </div>
    </footer>
  );
}
