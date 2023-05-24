import { Sql } from 'postgres';

type Products = {
  id: number;
  name: string;
  text1: string;
  text2: string;
  text3: string;
  type: string;
  price: number;
};

export async function up(sql: Sql) {
  await sql`
    CREATE TABLE products (
      id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
      name varchar(200) NOT NULL,
      text1 varchar(200) NOT NULL,
      text2 varchar(200) NOT NULL,
      text3 varchar(200) NOT NULL,
      type varchar(200) NOT NULL,
      price integer
    )
  `;
}

export async function down(sql: Sql) {
  await sql`
    DROP TABLE products
  `;
}
