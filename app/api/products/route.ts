import { NextResponse } from 'next/server';
import { getProducts } from '../../../database/products';
import { Product } from '../../../migrations/1684934780-createTableProducts';

export type Error = {
  error: string;
};

type ProductsResponseBodyGet = { products: Product[] } | Error;
// type AnimalsResponseBodyPost = { animal: Animal } | Error;

export async function GET(): Promise<NextResponse<ProductsResponseBodyGet>> {
  // query the database to get all the animals
  const products = await getProducts();

  return NextResponse.json({ products: products });
}
