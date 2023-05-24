import { cache } from 'react';
import { Product } from '../migrations/1684934780-createTableProducts';
import { sql } from './connect';

export const getProducts = cache(async () => {
  const products = await sql<Product[]>`
    SELECT * FROM products
 `;
  return products;
});

export const getProductById = cache(async (id: number) => {
  const [product] = await sql<Product[]>`
    SELECT
      *
    FROM
      products
    WHERE
      id = ${id}
  `;
  return product;
});

export const createProduct = cache(
  async (
    name: string,
    text1: string,
    text2: string,
    text3: string,
    type: string,
    price: number,
  ) => {
    const [product] = await sql<Product[]>`
      INSERT INTO products
        (name, text1, text2, text3, type, price)
      VALUES
        (${name}, ${text1}, ${text2}, ${text3}, ${type}, ${price})
      RETURNING *
    `;

    return product;
  },
);
