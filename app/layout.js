import { Inter } from 'next/font/google';
import Footer from './components/Footer';
import Nav from './components/Nav';
import styles from './globals.scss';

const inter = Inter({ subsets: ['latin'] });
console.log(inter);

export const metadata = {
  title: 'Coffeez | The best coffee',
  description: 'The tastiest coffee ever.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
