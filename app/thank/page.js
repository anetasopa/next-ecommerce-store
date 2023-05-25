import styles from './page.module.scss';

export const metadata = {
  title: 'Thank You | Coffez',
  description: 'Thank you for the order',
};

export default function ThankPage() {
  return (
    <main className={styles.container}>
      <div className={styles.containerText}>
        <h1>
          <span>Thank</span> you for your order.
        </h1>
        <p>
          We will begin processing your order immediately.
          <br />
          <br />
          If you have any questions or need assistance, please don't hesitate to
          reach out to us at the provided contact number:
        </p>
        <p className={styles.number}>+(43)-655-769-8876</p>
      </div>
    </main>
  );
}
