import styles from './case-card.module.css'

export default function CaseCard({ name, text, position }) {
  return (
    <article className={styles.card}>
      <div className={styles.frame}></div>
      <div className={styles.content}>
        <img src={`/images/companies-logo/${position}.png`} alt="лого компании" className={styles.image} />
        <div className={styles.about}>
          <p className={styles.name}>{name}</p>
          <p className={styles.text}>{text}</p>
        </div>
      </div>
    </article>
  )
}
