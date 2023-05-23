import { faChevronDown, faMugSaucer } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaCoffee,
  FaCookie,
  FaGlassCheers,
  FaGlassMartini,
  FaLeaf,
} from 'react-icons/fa';
import { products } from '../database/products';
import coffee from '../public/images/cup.png';
import makeCoffee from '../public/images/makeCoffee.png';
import styles from './page.module.scss';

export default function HomePage() {
  return (
    <main>
      <div className={styles.picCtn}>
        <img src="/image/coffee.png" alt="" className={styles.pic} />
        <img src="/image/coffee.png" alt="" className={styles.pic} />
        <img src="/image/coffee.png" alt="" className={styles.pic} />
        <img src="/image/coffee.png" alt="" className={styles.pic} />
        <img src="/image/coffee.png" alt="" className={styles.pic} />
      </div>
      <div className={styles.container}>
        <h1>
          Enjoy Your Moment With <span> Coffee</span>.
        </h1>
        <p className={styles.containerHeroText}>
          When an unknown printer took a galley of type and scrambled it to
          galley of type and.
        </p>
        <div>
          <Link
            className={styles.heroButtonGoToProduct}
            href="/products"
            style={{
              textDecoration: 'none',
            }}
          >
            Go To Product
          </Link>
          <Link
            className={styles.heroButtonAboutUs}
            href="/#"
            style={{
              textDecoration: 'none',
            }}
          >
            About Us
          </Link>
        </div>
      </div>
      <section className={styles.containerSectionAboutUs}>
        <div>
          <span>About Us</span>
          <h3>We make the delicious coffee for the coffee lovers.</h3>
          <p>
            Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices
            in ligula. Semper at tempufddfel. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Non quae, fugiat consequatur
            voluptatem nihil ad. Lorem ipsum dolor sit amet
          </p>
          <Link
            className={styles.knowMoreButtonAboutUs}
            href="/#"
            style={{
              textDecoration: 'none',
            }}
          >
            Know More
          </Link>
        </div>
        <Image
          alt="makeCoffee"
          className={styles.imageMakeCoffee}
          src={makeCoffee}
        />
      </section>
      <section className={styles.containerSectionBenefits}>
        <div>
          <div>
            <FaCoffee className={styles.icon} />
            <h4>Types of Coffee</h4>
            <p>Choose amount of cups you drink.</p>
          </div>
          <div>
            <FaGlassMartini className={styles.icon} />
            <h4>Bean Varieties</h4>
            <p>choose the drink that suits you best.</p>
          </div>
          <div>
            <FaCookie className={styles.icon} />
            <h4>Coffee & Cookie</h4>
            <p>Select the Brews that suits you best.</p>
          </div>
          <div>
            <FaLeaf className={styles.icon} />
            <h4>Coffee to go</h4>
            <p>Enjoy a cup of coffee every morning.</p>
          </div>
        </div>
      </section>

      <section className={styles.containerHours}>
        <div className={styles.hoursText}>
          <h3>We make the delicious coffee.</h3>
          <p>
            Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices
            in ligula. Semper at tempufddfel. Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. dignissimos quis soluta sapiente
            aperiam quod.
          </p>
        </div>
        <Image alt="coffee" className={styles.imageCoffee} src={coffee} />
        <div className={styles.hours}>
          <ul>
            <h3>Opening Hours: </h3>
            <li>Monday – Friday 11:00 - 07:00</li>
            <li>Saturday 10:00 – 12:00</li>
            <li>Sunday CLOSED</li>
          </ul>

          <ul>
            <h3>Reservation Numbers: </h3>
            <li>+(43)-655-769-8876</li>
            <li>+(43)-655-459-6688</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
