import styles from './cases.module.css';

import CaseCard from './case-card/case-card';
import CaseVideoCard from './case-video-card/case-video-card';
import { casesData } from '../../../public/data';
import SectionTitle from '../../section-title/section-title';

export default function Cases({ onVideoClick }) {


  return (
    <section id='cases' className={styles.cases}>
      <div className={styles.about}>
        <SectionTitle position='2' text='Кейсы' />
      </div>
      <ul className={styles.list}>
        {casesData.map((caseData, index) => (
          <li key={index} className={styles.listElement}>
            <CaseCard {...caseData} />
          </li>
        ))}
        <li className={styles.listElement}>
            <CaseVideoCard onClick={onVideoClick} />
          </li>
      </ul>
    </section>
  )
}
