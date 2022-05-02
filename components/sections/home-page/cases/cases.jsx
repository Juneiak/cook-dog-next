import styles from './cases.module.css';

import CaseVideoCard from './case-video-card/case-video-card';
import { casesData } from '../../../../public/data';
import SectionTitle from '../../../section-title/section-title';

export default function Cases({ openVideoPopUpHandler }) {


  return (
    <section id='cases' className={styles.cases}>
      <div className={styles.about}>
        <SectionTitle position='2' text='Кейсы' />
      </div>
      <ul className={styles.list}>
        {casesData.map((caseData, index) => (
          <li key={index} className={styles.listElement}>
            <CaseVideoCard data={caseData} openVideoPopUpHandler={openVideoPopUpHandler} />
          </li>
        ))}
      </ul>
    </section>
  )
}
