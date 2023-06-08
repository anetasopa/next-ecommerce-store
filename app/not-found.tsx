import styles from './not-found.module.scss';

export const rootNotFoundMetadata = {
  title: 'Not Found',
  description: "sorry can't find the page you are looking for",
};

export default function RootNotFound() {
  return (
    <div className={styles.notFound}>
      Sorry this page was not found make sure you visit a page that exists
    </div>
  );
}
