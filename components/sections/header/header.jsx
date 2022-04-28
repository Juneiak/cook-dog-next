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
              <span className={styles.name}>COOKDOG</span>
            </a>
          </Link>
        </div>
        <nav className={styles.nav}>
          <button onClick={() => setBurgerIsOpen(!burgerIsOpen)} className={`${styles.burger} ${burgerIsOpen ? styles.burgerOpen : ''}`}></button>
          <ul className={`${styles.list} ${burgerIsOpen ? styles.listOpen : ''}`}>
            <li className={styles.listElement}><a href="/prices" className={styles.link}>Цены</a></li>
            <li className={styles.listElement}><a href="/services" className={styles.link}>Услуги</a></li>
            <li className={styles.listElement}><a href="/cases" className={styles.link}>Кейсы</a></li>
            <li className={styles.listElement}><a href="/academy" className={styles.link}>Академия</a></li>
            <li className={styles.listElement}><a href="/career" className={styles.link}>Вакансии</a></li>
            <li className={styles.listElement}><a href="/contacts" className={styles.link}>Контакты</a></li>
          </ul>
        </nav>
      </div>
      
    </header>
  )
}
