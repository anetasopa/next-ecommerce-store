import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { getProducts } from '../../database/products';
import styles from './Filter.module.scss';

export default async function Filter() {
  // const [selectedType, setSelectedType] = useState('');
  const products = await getProducts();

  // Filter products by type
  const filteredProducts = selectedType
    ? products.filter((product) => product.type === selectedType)
    : products;

  return (
    <>
      <label htmlFor="typeFilter">Filter by Type:</label>
      <select
        id="typeFilter"
        value={selectedType}
        onChange={(e) => setSelectedType(e.target.value)}
      >
        <option value="">All</option>
        <option value="type1">Type 1</option>
        <option value="type2">Type 2</option>
        {/* Add more options for different types */}
      </select>
      <div className={styles.productsCardsContainer}>
        {filteredProducts.map((product) => {
          return (
            <div
              key={`product-div-${product.id}`}
              className={styles.productCard}
            >
              <div className={styles.container}>
                <Image
                  alt=""
                  data-test-id="product-image"
                  src={`/images/${product.name}.png`}
                  width={250}
                  height={200}
                />
                <div className={styles.overlay}> </div>
                <div className={styles.button}>
                  <Link
                    data-test-id={`product-${product.id}`}
                    className={styles.a}
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
                href={`/products/${product.id}`}
                style={{
                  textDecoration: 'none',
                }}
              >
                {product.name}
              </Link>
              <p className={styles.productType}>{product.type}</p>
              <p data-test-id="product-price" className={styles.productPrice}>
                {Number(product.price)}
                <span> EUR</span>
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
}
