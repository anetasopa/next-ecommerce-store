import Image from 'next/image';
import Link from 'next/link';
import { FaCoffee, FaCookie, FaGlassMartini, FaLeaf } from 'react-icons/fa';
import coffee from '../public/images/cup.png';
import makeCoffee from '../public/images/makeCoffee.png';
import styles from './page.module.scss';

export default function HomePage() {
  return (
    <main>
      {/* <div className={styles.picCtn}>
        <img src="/image/coffee.png" alt="" className={styles.pic} />
        <img src="/image/coffee.png" alt="" className={styles.pic} />
        <img src="/image/coffee.png" alt="" className={styles.pic} />
        <img src={coffee} alt="" className={styles.pic} />
        <img src="/image/coffee.png" alt="" className={styles.pic} />
      </div> */}
      <div className={styles.container}>
        <h1>
          Enjoy Your Moment With <span> Coffee</span>.
        </h1>
        <p className={styles.containerHeroText}>
          We are passionate coffee enthusiasts who believe that a cup of coffee
          has the power to transform ordinary moments into extraordinary
          experiences.
        </p>
        <div>
          <Link
            data-test-id="products-link"
            className={styles.heroButtonGoToProduct}
            href="/products"
          >
            Go To Products
          </Link>
          <Link className={styles.heroButtonAboutUs} href="#aboutUs">
            About Us
          </Link>
        </div>
      </div>

      <section id="aboutUs" className={styles.containerSectionAboutUs}>
        <div>
          <span>About Us</span>
          <h3>We make the delicious coffee for the coffee lovers.</h3>
          <p>
            Our mission is to connect coffee lovers with exceptional brews that
            cater to a variety of preferences. Each coffee we offer has been
            meticulously sourced, handpicked, and expertly roasted to preserve
            its unique flavors and aromas.
          </p>
          <Link className={styles.knowMoreButtonAboutUs} href="/products">
            Products
          </Link>
        </div>
        <div className={styles.imageMakeCoffee}>
          <Image alt="makeCoffee" src={makeCoffee} />
        </div>
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
            <p>Choose the drink that suits you best.</p>
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
            We understand the value of a well-deserved break amidst the hustle
            and bustle of life. That's why our doors are open to welcome you and
            serve our delightful coffee at any time of the day.
          </p>
        </div>
        <div className={styles.imageCoffee}>
          <Image alt="coffee" src={coffee} width={300} height={250} />
        </div>
        <div className={styles.hours}>
          <h3>Opening Hours: </h3>
          <ul>
            <li>Monday – Friday 11:00 - 07:00</li>
            <li>Saturday 10:00 – 12:00</li>
          </ul>
          <h3>Reservation Numbers: </h3>
          <ul>
            <li>+(43)-655-769-8876</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
