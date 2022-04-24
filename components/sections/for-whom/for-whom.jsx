import styles from './for-whom.module.css';
import ForWhomCard from './for-whom-card/for-whom-card';

import icon1 from '../../../public/images/icons/icon1.png';
import icon2 from '../../../public/images/icons/icon2.png';
import icon3 from '../../../public/images/icons/icon3.png';


export default function ForWhom({ onPopUpButtonClick }) {
  return (
    <section className={styles.forWhom}>
      <h2 className={styles.title}>Если у тебя:</h2>
      <ul className={styles.list}>

        <l1 className={styles.listElement}>
          <ForWhomCard
            icon={icon1} title='Маленький бизнес'
            text='Ты только начал и мечтаешь выйти на уровень &quot;Apple&quot;.'
          />
        </l1>

        <l1 className={styles.listElement}>
          <ForWhomCard
            icon={icon2}
            title='Средний бизнес'
            text='Свой бизнес поставлен на поток, ты в поиске решений по дальнейшему развитию бренда.' 
          />
        </l1>

        <l1 className={styles.listElement}>
          <ForWhomCard
            icon={icon3}
            title='Собственное производство'
            text='Ты хочешь заявить о себе и выйти на мировой уровень.'
          />
        </l1>

      </ul>
      <div className={styles.button}>
        <button onClick={onPopUpButtonClick} name="leave-contact" type="button" className="button">Пора к нам!</button>
      </div>
    </section>
  )
}
