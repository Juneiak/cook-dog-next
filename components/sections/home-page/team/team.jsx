import styles from './team.module.css';
import Slider from '../slider/slider';
import { teamData } from '../../../../public/data';
import SectionTitle from '../../../section-title/section-title';


export default function Team() {
  return (
    <section id='ourTeam' className={styles.team}>
      <div className={styles.about}>
        <SectionTitle position='1' text='Кстати, знакомься. Вот наши очумелые ручки, глазки и мозги:' />
      </div>
      <div className={styles.list}>
        <Slider data={teamData} />
      </div>
    </section>

  )
}
