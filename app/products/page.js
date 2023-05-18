import Image from 'next/image';
import Link from 'next/link';
import { products } from '../../database/products';

export default function ProductPage() {
  return (
    <main>
      This are my product
      {products.map((product) => {
        console.log({ product });
        return (
          <div key={`product-div-${product.id}`}>
            <Link href={`/products/${product.name}`}>{product.name}</Link>
            <br />
            <Image
              src={`/images/${product.name}.png`}
              width={100}
              height={100}
            />
          </div>
        );
      })}
    </main>
  );
}
