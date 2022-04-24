import styles from './slider.module.css'
import TeamCard from '../sections/team/team-card/team-card'

export default function Slider({ data }) {

  return (
    <div className={styles.slider}>
      <ul className={styles.list}>
        {data.map((memberData, index) => (
          <li key={index} className={styles.listElement}>
            <TeamCard {...memberData}></TeamCard>
          </li>
        ))}
      </ul>
    </div>
  )
}
