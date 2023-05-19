import { faChevronDown, faMugSaucer } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import { products } from '../database/products';
import coffee from '../public/images/coffee.png';
import makeCoffee from '../public/images/makeCoffee.png';
import GenerateButton from './GenerateButton';
import styles from './page.module.scss';

export default function HomePage() {
  return (
    <>
      <main className={styles.containerMain}>
        <Image alt="coffee" className={styles.imageHeader} src={coffee} />
        <div>
          <h1>
            Enjoy your moment with <span>coffee</span>.
          </h1>
          <p className={styles.containerMainText}>
            When an unknown printer took a galley of type and scrambled it to
            galley of type and.
          </p>
          <GenerateButton
            name="Go to product"
            backgroundColor="#d17721"
            color="white"
            left="950px"
            top="350px"
          />
          <GenerateButton
            name="About Us"
            backgroundColor="#fffff"
            color="#d17721"
            left="1165px"
            top="350px"
          />
        </div>
      </main>
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
          <GenerateButton
            name="Know More"
            backgroundColor="#FFFFFF"
            color="#d17721"
            border="1px solid #d17721"
            marginTop="800px"
          />
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
            <FontAwesomeIcon className={styles.icon} icon={faMugSaucer} />
            <h4>Types of Coffee</h4>
            <p>Choose amount of cups you drink.</p>
          </div>
          <div>
            <FontAwesomeIcon className={styles.icon} icon={faMugSaucer} />
            <h4>Types of Coffee</h4>
            <p>Select the Brews that suits you best.</p>
          </div>
          <div>
            <FontAwesomeIcon className={styles.icon} icon={faMugSaucer} />
            <h4>Types of Coffee</h4>
            <p>choose the drink that suits you best</p>
          </div>
          <div>
            <FontAwesomeIcon className={styles.icon} icon={faMugSaucer} />
            <h4>Types of Coffee</h4>
            <p>Enjoy a cup of coffee every morning.</p>
          </div>
        </div>
      </section>
      <section className={styles.containerSectionProducts}>
        {products.map((product) => {
          return (
            <div className={styles.product} key={`product-div-${product.id}`}>
              <div className={styles.textContainer}>
                <h3>We make the delicious coffee for the coffee lovers.</h3>
                <p>
                  Lorem ipsum viverra feugiat. Pellen tesque libero ut justo,
                  ultrices in ligula. Semper at tempufddfel. Lorem ipsum dolor
                </p>
                <div>
                  <FontAwesomeIcon
                    className={styles.icon}
                    icon={faChevronDown}
                  />
                  <span>Lorem ipsum viverra feugiat.</span>
                </div>
                <div>
                  <FontAwesomeIcon
                    className={styles.icon}
                    icon={faChevronDown}
                  />
                  <span>Lorem ipsum viverra feugiat.</span>
                </div>
                <div>
                  <FontAwesomeIcon
                    className={styles.icon}
                    icon={faChevronDown}
                  />
                  <span>Lorem ipsum viverra feugiat.</span>
                </div>
              </div>
              <div className={styles.imageContainer}>
                <div className={styles.container}>
                  <Image
                    className={styles.img}
                    alt="productName"
                    width={200}
                    height={200}
                    src={`/images/${product.name}.png`}
                  />
                  <p className={styles.title}>card title</p>
                  <div className={styles.overlay}></div>
                  <div className={styles.button}>
                    <Link
                      className={styles.a}
                      href={`/products/${product.name}`}
                      style={{
                        color: 'black',
                        textDecoration: 'none',
                      }}
                    >
                      BUTTON
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}
