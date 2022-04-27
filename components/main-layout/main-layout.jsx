import styles from './main-layout.module.css';

import Footer from '../sections/footer/footer';
import Header from '../sections/header/header';
import Head from 'next/head';

export default function MainLayout({ children }) {
  return (
    <>
    <Head>
      <title>Cookdog</title>
    </Head>

    <div className={styles.page}>
      <Header />
      {children}
      <Footer />
    </div>
    </>
    
  )
};
