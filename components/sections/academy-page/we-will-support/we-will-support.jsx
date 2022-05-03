import styles from './we-will-support.module.css';

export default function WeWillSupport() {
  return (
    <section className={styles.weWillSupport}>
      <div className={styles.content}>
        <h2 className={styles.title}>
          <span className={styles.titlePart}>Ты не сдашься на полпути</span>
          <span className={styles.titlePart}>мы будем всегда рядом</span>
          <span className={styles.titlePart}>и поддержим на этапе</span>
          <span className={styles.titlePart}>сопротивления</span>
        </h2>
        <p className={styles.subtitle}>Пройдем этот этап вашей жизни вместе</p>
      </div>
    </section>
  )
}
