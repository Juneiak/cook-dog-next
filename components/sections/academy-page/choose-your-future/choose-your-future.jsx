import styles from './choose-your-future.module.css';
import AcademyMenu from '../../../academy-menu/academy-menu';

export default function ChooseYourFuture() {

  return (
    <section className={styles.chooseYourFuture}>
      <div className={styles.content}>
        <h2 className={styles.title}>Выбирай свое будущее:</h2>
        <AcademyMenu />
      </div>
    </section>
  )
}
