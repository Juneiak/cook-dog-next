import styles from './main-layout.module.css';

import Footer from '../sections/footer/footer';
import Header from '../sections/header/header';

export default function MainLayout({ children }) {
  return (
    <div className={styles.page}>
      <Header />
        {children}
      <Footer />
    </div>
  )
};
