import Image from 'next/image';
import Link from 'next/link';
import { products } from '../../database/products';
// import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import Image from 'next/image';
// import Link from 'next/link';
// import { notFound } from 'next/navigation';
// import { getProductById, products } from '../../database/products';
// import QuantityCounter from '../../util/counter';
import image from '../../public/images/CapsuBrew Delight.png';
import styles from './page.module.scss';

export const dynamic = 'force-dynamic';

export default function CardPage() {
  return (
    <main className={styles.containerCardProducts}>
      <div className={styles.imageContainer}>
        <Image
          data-test-id="product-image"
          className={styles.img}
          alt="productName"
          width={250}
          height={250}
          src={image}
        />
      </div>
      <div className={styles.productsCardsContainer}>
        {products.map((product) => {
          return (
            <div
              key={`product-div-${product.id}`}
              className={styles.productCard}
            >
              {' '}
              {/* <Image
                src={`/images/${product.name}.png`}
                width={250}
                height={200}
              /> */}
              <Image
                src={`/images/${product.name}.png`}
                width={150}
                height={100}
              />
              <div className={styles.productsTexts}>
                <Link
                  className={styles.productName}
                  href={`/products/${product.id}`}
                  style={{
                    textDecoration: 'none',
                  }}
                >
                  {product.name}
                </Link>
                <p className={styles.productType}>{product.type}</p>
                <p className={styles.productPrice}>
                  {product.price} <span>Euro</span>{' '}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
