import styles from './header.module.css';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [ burgerIsOpen, setBurgerIsOpen ] = useState(false);
  
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <Link href='/'>
            <a className={styles.logoLink}>
              <img className={styles.logoImage} alt='логотип' src='/images/misc/logo.png'></img>
              <span className={styles.name}>COOKDOG</span>
            </a>
          </Link>
        </div>
        <nav className={styles.nav}>
          <button onClick={() => setBurgerIsOpen(!burgerIsOpen)} className={`${styles.burger} ${burgerIsOpen ? styles.burgerOpen : ''}`}></button>
          <ul className={`${styles.list} ${burgerIsOpen ? styles.listOpen : ''}`}>
            <li className={styles.listElement}><Link href="/prices"><a className={styles.link}>Цены</a></Link></li>
            <li className={styles.listElement}><Link href="/services"><a className={styles.link}>Услуги</a></Link></li>
            <li className={styles.listElement}><Link href="/cases"><a className={styles.link}>Кейсы</a></Link></li>
            <li className={styles.listElement}><Link href="/academy"><a className={styles.link}>Академия</a></Link></li>
            <li className={styles.listElement}><Link href="/career"><a className={styles.link}>Вакансии</a></Link></li>
            <li className={styles.listElement}><Link href="/contacts"><a className={styles.link}>Контакты</a></Link></li>
          </ul>
        </nav>
      </div>
      
    </header>
  )
}
