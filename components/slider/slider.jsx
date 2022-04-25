import styles from './slider.module.css'
import TeamCard from '../sections/team/team-card/team-card'
import { useRef, useEffect } from 'react';

export default function Slider({ data }) {
  const listRef = useRef(null);

  useEffect(() => {
    if (listRef.current) {
      const list = listRef.current.querySelectorAll('#teamMemberCard')
      console.log(list)
    }

  }, [listRef])
  return (
    <div className={styles.slider}>
      <ul ref={listRef} className={styles.list}>
        {data.map((memberData, index) => (
          <li id='teamMemberCard' key={index} className={styles.listElement}>
            <TeamCard {...memberData}></TeamCard>
          </li>
        ))}
      </ul>
    </div>
  )
}
