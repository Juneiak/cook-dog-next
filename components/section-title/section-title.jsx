import styles from './section-title.module.css';


export default function SectionTitle({ text, position }) {
  return (
    <div className={`${styles.frame} ${styles['frame' + position]}`}>
      <h2 className={styles.title}>{text}</h2>
    </div>
  )
}
