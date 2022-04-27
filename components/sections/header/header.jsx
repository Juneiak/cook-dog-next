import styles from './header.module.css';
import Link from 'next/link';
export default function Header() {

  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <Link href='/'>
          <a className={styles.logo}>
            <span className={styles.name}>COOKDOG</span>
          </a>
        </Link>
        <nav className={styles.nav}>
          <ul className={styles.list}>
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
