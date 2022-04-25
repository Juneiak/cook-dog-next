import styles from './cases.module.css';

import CaseCard from './case-card/case-card';
import { casesData } from '../../../public/data';
import SectionTitle from '../../section-title/section-title';

export default function Cases() {
  return (
    <section className={styles.cases}>
      <div className={styles.about}>
        <SectionTitle position='2' text='Кейсы' />
      </div>
      <ul className={styles.list}>
        {casesData.map((caseData, index) => (
          <li key={index} className={styles.listElement}>
            <CaseCard {...caseData} />
          </li>
        ))}
      </ul>
    </section>
  )
}
