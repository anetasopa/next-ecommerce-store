// import beans from '../public/images/beans.png';
// import capsules from '../public/images/capsules.png';
import { faCoffeeBeans, faMugSaucer } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import { products } from '../database/products';
import coffee from '../public/images/coffee.png';
import makeCoffee from '../public/images/makeCoffee.png';
import GenerateButton from './GenerateButton';
// import ground from '../public/images/ground.png';
// import instant from '../public/images/instant.png';
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
          <span className={styles.containerMainText}>
            When an unknown printer took a galley of type and scrambled it to
            galley of type and.
          </span>
          s{' '}
          <GenerateButton
            name="Go to product"
            backgroundColor="#d17721"
            color="white"
            left="850px"
          />
          <GenerateButton
            name="About Us"
            backgroundColor="#fffff"
            color="#d17721"
            left="1065px"
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
        <h3>PRODUCTS</h3>
        <div className={styles.grid}>
          {products.map((product) => {
            return (
              <div key={`product-div-${product.id}`}>
                <Image
                  alt="productName"
                  width={200}
                  height={200}
                  src={`/images/${product.name}.png`}
                />
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
