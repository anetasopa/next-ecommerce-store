import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getProductByName } from '../../../database/products';
import styles from './page.module.scss';

export const dynamic = 'force-dynamic';

export default function NamePage({ params }) {
  const singleProduct = getProductByName(params.name);

  console.log(singleProduct);

  if (!singleProduct) {
    notFound();
  }

  return (
    <div className={styles.containerSectionProducts}>
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
    </div>
  );
}
