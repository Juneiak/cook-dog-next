import styles from './footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <span className={styles.author}>CookDog Agency Design</span>
        <span className={styles.number}>+7 927 084 44 88</span>
        <ul className={styles.list}>
          <li className={styles.listElement}>
            <a href="https://vk.com/cookdog" target="blank" className={styles.link}>
              <img src="/images/misc/vk-icon.svg" alt="иконка вк" className={styles.linkIcon} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
