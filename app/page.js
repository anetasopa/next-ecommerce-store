import Image from 'next/image';
import { products } from '../database/products';
// import beans from '../public/images/beans.png';
// import capsules from '../public/images/capsules.png';
import coffee from '../public/images/coffee.png';
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
