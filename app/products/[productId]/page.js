import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProductById } from '../../../database/products';
import styles from './page.module.scss';

export const dynamic = 'force-dynamic';

export default function NamePage({ params }) {
  const singleProduct = getProductById(Number(params.productId));

  console.log(singleProduct);

  if (!singleProduct) {
    notFound();
  }

  return (
    <main
      data-test-id={`cart-product-${singleProduct.id}`}
      className={styles.containerSectionProducts}
    >
      <h1>Product</h1>

      <div className={styles.product} key={`product-div-${singleProduct.id}`}>
        <div className={styles.textContainer}>
          <h3>We make the delicious coffee for the coffee lovers.</h3>
          <p>
            Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices
            in ligula. Semper at tempufddfel. Lorem ipsum dolor
          </p>
          <div>
            <FontAwesomeIcon className={styles.icon} icon={faChevronDown} />
            <span>Lorem ipsum viverra feugiat.</span>
          </div>
          <div>
            <FontAwesomeIcon className={styles.icon} icon={faChevronDown} />
            <span>Lorem ipsum viverra feugiat.</span>
          </div>
          <div>
            <FontAwesomeIcon className={styles.icon} icon={faChevronDown} />
            <span>Lorem ipsum viverra feugiat.</span>
          </div>
          <p className={styles.price}>
            Price: <span>{singleProduct.price}</span> Euro
          </p>
          <Link
            href="/card/"
            style={{
              color: 'black',
              textDecoration: 'none',
            }}
          >
            Add to card
          </Link>
        </div>
        <div className={styles.imageContainer}>
          <Image
            className={styles.img}
            alt="productName"
            width={200}
            height={200}
            src={`/images/${singleProduct.name}.png`}
          />
        </div>
      </div>
    </main>
  );
}
