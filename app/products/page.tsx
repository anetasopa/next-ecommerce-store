import Image from 'next/image';
import Link from 'next/link';
import { getProducts } from '../../database/products';
import Filter from './Filter';
import styles from './page.module.scss';

export const metadata = {
  title: 'Product Overview | Coffez',
  description: 'Products',
};

export default async function ProductPage() {
  const [selectedType, setSelectedType] = useState('');

  return (
    <main className={styles.containerOverview}>
      <h1>Products</h1>
      {/* <Filter products={products} /> */}
    </main>
  );
}