import './globals.scss';
// import { Inter } from 'next/font/google';
import Footer from './components/Footer';
import Nav from './components/Nav';

// const inter = Inter({ subsets: ['latin'] });

// export const inter = Inter({
//   subsets: ['latin'],
//   display: 'swap',
// });

// export const roboto_mono = Roboto_Mono({
//   subsets: ['latin'],
//   display: 'swap',
// });

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
