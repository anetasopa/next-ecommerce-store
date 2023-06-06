import { getProducts } from '../../database/products';
import Filter from './Filter';
import styles from './page.module.scss';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Product Overview | Coffez',
  description: 'Products',
};

export default async function ProductPage() {
  const products = await getProducts();

  return (
    <main className={styles.containerOverview}>
      <h1>Products</h1>
      <Filter products={products} />
    </main>
  );
}
