import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProductById, getProducts } from '../../../database/products';
import styles from './page.module.scss';
import QuantityCounter from './QuantityCounter';

export const dynamic = 'force-dynamic';

export type CookieItem = {
  id: number;
  quantity: number;
};

type Props = {
  params: { productId: string }; // it is string from url string
};

export default async function ProductPage(props: Props) {
  const singleProduct = await getProductById(Number(props.params.productId));
  const products = await getProducts();

  if (!singleProduct) {
    notFound();
  }

  return (
    <main
      data-test-id={`cart-product-${singleProduct.id}`}
      className={styles.containerSectionProducts}
    >
      <div className={styles.product} key={`product-div-${singleProduct.id}`}>
        <div className={styles.textContainer}>
          <h3>{singleProduct.name}</h3>
          <p>{singleProduct.type}</p>
          <div>
            <span>{singleProduct.text1}</span>
          </div>
          <div>
            <span>{singleProduct.text2}</span>
          </div>
          <div>
            <span>{singleProduct.text3}</span>
          </div>
          <div className={styles.flex}>
            <p className={styles.price}>
              Price:{' '}
              <span data-test-id="product-price"> {singleProduct.price}</span>{' '}
              EUR
            </p>
          </div>
          <QuantityCounter productId={singleProduct.id} />
        </div>
        <div className={styles.imageContainer}>
          <Image
            data-test-id="product-image"
            className={styles.img}
            alt={singleProduct.name}
            width={200}
            height={200}
            src={`/images/${singleProduct.name}.png`}
          />
        </div>
      </div>
      <h2>You may also like</h2>
      <div className={styles.productsCardsContainer}>
        {products.map((product) => {
          return (
            <div
              key={`product-div-${product.id}`}
              className={styles.productCard}
            >
              <div className={styles.container}>
                <Image
                  data-test-id="product-image"
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
              <p data-test-id="product-price" className={styles.productPrice}>
                {product.price}
                <span> EUR</span>
              </p>
            </div>
          );
        })}
      </div>
    </main>
  );
}
