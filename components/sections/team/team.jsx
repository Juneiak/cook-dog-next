import styles from './team.module.css';
import Silder from '../../slider/slider';
import { teamData } from '../../../public/data';

export default function Team() {
  return (
    <section className={styles.team}>
      <div className={styles.about}>
        <h2 className={styles.title}>Кстати, знакомься. Вот наши очумелые ручки, глазки и мозги:</h2>
        <span className={styles.subtitle}>Это только часть команды!</span>
      </div>
      <div className={styles.list}>
        <Silder data={teamData} />
      </div>
    </section>

  )
}
