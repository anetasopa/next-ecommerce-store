import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  FaArrowDown,
  FaArrowUp,
  FaCanadianMapleLeaf,
  FaCoffee,
  FaEnvelope,
  FaLeaf,
  FaLocationArrow,
  FaPhone,
} from 'react-icons/fa';
import { getProductById, products } from '../../../database/products';
import styles from './page.module.scss';
import QuantityCounter from './QuantityCounter';

export const dynamic = 'force-dynamic';

type Props = {
  params: { productId: string };
};

export default function ProductPage(props: Props) {
  const singleProduct = getProductById(Number(props.params.productId));

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
          <h3>{singleProduct.name}</h3>
          <p>{singleProduct.type}</p>
          <div>
            {/* <FaArrow className={styles.icon} /> */}
            <FontAwesomeIcon className={styles.icon} icon={faChevronDown} />
            <span>{singleProduct.text1}</span>
          </div>
          <div>
            <FontAwesomeIcon className={styles.icon} icon={faChevronDown} />
            <span>{singleProduct.text2}</span>
          </div>
          <div>
            <FontAwesomeIcon className={styles.icon} icon={faChevronDown} />
            <span>{singleProduct.text3}</span>
          </div>
          <div className={styles.flex}>
            <p data-test-id="product-price" className={styles.price}>
              Price:<span>{singleProduct.price}</span> Euro
            </p>
          </div>
          <QuantityCounter productId={singleProduct.id} />
        </div>
        <div className={styles.imageContainer}>
          <Image
            data-test-id="product-image"
            className={styles.img}
            alt="productName"
            width={200}
            height={200}
            src={`/images/${singleProduct.name}.png`}
          />
        </div>
      </div>
      <h2>More Products</h2>
      <div className={styles.productsCardsContainer}>
        {products.map((product) => {
          return (
            <div
              key={`product-div-${product.id}`}
              className={styles.productCard}
            >
              {' '}
              <div className={styles.container}>
                <Image
                  alt=""
                  src={`/images/${product.name}.png`}
                  width={250}
                  height={200}
                />
                <div className={styles.overlay} />
                <div className={styles.button}>
                  <Link
                    data-test-id={`product-${product.id}`}
                    className={styles.a}
                    key={`product-${product.id}`}
                    href={`/products/${product.id}`}
                    style={{
                      color: 'black',
                      textDecoration: 'none',
                    }}
                  >
                    OPEN
                  </Link>
                </div>
              </div>
              <Link
                data-test-id={`product-${product.id}`}
                className={styles.productName}
                key={`product-${product.id}`}
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
          );
        })}
      </div>
    </main>
  );
}
