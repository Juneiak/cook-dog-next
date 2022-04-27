import styles from './for-whom.module.css';
import ForWhomCard from './for-whom-card/for-whom-card';
import ButtonPrimary from '../../buttons/button-primary/button-primary';

import icon1 from '../../../public/images/icons/icon1.png';
import icon2 from '../../../public/images/icons/icon2.png';
import icon3 from '../../../public/images/icons/icon3.png';


export default function ForWhom({ onPopUpButtonClick }) {
  return (
    <section id='forWhom' className={styles.forWhom}>
      <h2 className={styles.title}>Если у тебя:</h2>
      <ul className={styles.list}>

        <li className={styles.listElement}>
          <ForWhomCard
            icon={icon1} title='Маленький бизнес'
            text='Ты только начал и мечтаешь выйти на уровень &quot;Apple&quot;.'
          />
        </li>

        <li className={styles.listElement}>
          <ForWhomCard
            icon={icon2}
            title='Средний бизнес'
            text='Свой бизнес поставлен на поток, ты в поиске решений по дальнейшему развитию бренда.' 
          />
        </li>

        <li className={styles.listElement}>
          <ForWhomCard
            icon={icon3}
            title='Собственное производство'
            text='Ты хочешь заявить о себе и выйти на мировой уровень.'
          />
        </li>

      </ul>
      <div className={styles.button}>
        <ButtonPrimary clickHandler={onPopUpButtonClick} name="leave-contact" text='Пора к нам!' />

      </div>
    </section>
  )
}
