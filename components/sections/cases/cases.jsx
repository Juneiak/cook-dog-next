import styles from './cases.module.css';

import CaseCard from './case-card/case-card';
import { casesData } from '../../../public/data';

export default function Cases() {
  return (
    <section className={styles.cases}>
      <h2 className={styles.title}>Кейсы</h2>
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
