import styles from './digital-future.module.css';
import AcademyMenu from '../../../academy-menu/academy-menu';

export default function DigitalFuture() {
  return (
    <section className={styles.digitalFuture}>
      <div className={styles.content}>

        <div className={styles.about}>
          <h1 className={styles.title}>Онлайн-академия твоего</h1>
          <span className={styles.subtitle}>DIGITAL-будущего</span>
        </div>

        <div className={styles.listContainer}>
          <AcademyMenu />
        </div>
        
      </div>
    </section>
  )
}
