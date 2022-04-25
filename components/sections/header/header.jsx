import styles from './header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li className={styles.listElement}><a href="#forWhom" className={styles.link}>for whom</a></li>
          <li className={styles.listElement}><a href="#whatWeDo" className={styles.link}>what we do</a></li>
          <li className={styles.listElement}><a href="#badWays" className={styles.link}>bad ways</a></li>
          <li className={styles.listElement}><a href="#ourTeam" className={styles.link}>our team</a></li>
          <li className={styles.listElement}><a href="#cases" className={styles.link}>cases</a></li>
          <li className={styles.listElement}><a href="#advantages" className={styles.link}>advantages</a></li>
        </ul>
      </nav>
    </header>
  )
}
