'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { Product } from '../../migrations/1684934780-createTableProducts';
import styles from './Filter.module.scss';

type Props = {
  products: Product[];
};

export default function Filter(props: Props) {
  let products: Product[] = props.products;

  const [selectedType, setSelectedType] = useState('');
  const [searchName, setSearchName] = useState('');

  // Search products by name
  if (searchName) {
    const fn = (product: Product) => product.name.includes(searchName);

    products = products.filter(fn);
  }

  // Filter products by type
  const filteredProducts = selectedType
    ? products.filter((product) => product.type === selectedType)
    : products;

  return (
    <>
      <div>
        <FaSearch className={styles.icon} />
        <input
          className={styles.inputSearch}
          type=""
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
        />
      </div>

      <div className={styles.filter}>
        <select
          id="typeFilter"
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
        >
          <option value="">All</option>
          <option value="capsules">Capsules</option>
          <option value="instant">Instant</option>
          <option value="bean">Bean</option>
        </select>
      </div>

      <div className={styles.productsCardsContainer}>
        {filteredProducts.map((product) => {
          return (
            <div
              key={`product-div-${product.id}`}
              data-test-id={`product-${product.id}`}
              className={styles.productCard}
            >
              <div className={styles.container}>
                <Link
                  href={`/products/${product.id}`}
                  data-test-id={`product-${product.id}`}
                >
                  <Image
                    alt={product.name}
                    data-test-id="product-image"
                    src={`/images/${product.name}.png`}
                    width={250}
                    height={200}
                  />
                </Link>
                <div className={styles.overlay}> </div>
                <div className={styles.button}>
                  <Link
                    data-test-id={`product-${product.id}`}
                    className={styles.a}
                    href={`/products/${product.id}`}
                  >
                    OPEN
                  </Link>
                </div>
              </div>
              <Link
                className={styles.productName}
                href={`/products/${product.id}`}
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
