import styles from './card-about.module.css'

export default function CardAbout({ title, text, inRow=false }) {
  return (
    <div className={`${styles.card} ${inRow && styles.cardInRow}`}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.text}>{text}</p>
    </div>
  )
}
