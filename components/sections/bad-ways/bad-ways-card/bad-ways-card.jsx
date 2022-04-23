import styles from './bad-ways-card.module.css'

export default function BadWaysCard({ title, children, total }) {
  return (
    <article className={styles.badWaysCard}>
      <div className={styles.shadow}></div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>

        {children}
        
        <p className={styles.total}>{total}</p>
      </div>
    </article>
  )
}
