import styles from './for-whom.module.css';
import ForWhomCard from './for-whom-card/for-whom-card';
import ButtonPrimary from '../../buttons/button-primary/button-primary';

import icon1 from '../../../public/images/gif/icon6.png';
import icon2 from '../../../public/images/gif/icon7.png';
import icon3 from '../../../public/images/gif/icon8.png';

import gif1 from '../../../public/images/gif/gif6.gif';
import gif2 from '../../../public/images/gif/gif7.gif';
import gif3 from '../../../public/images/gif/gif8.gif';


export default function ForWhom({ onPopUpButtonClick }) {
  return (
    <section id='forWhom' className={styles.forWhom}>
      <h2 className={styles.title}>Если у тебя:</h2>
      <ul className={styles.list}>

        <li className={styles.listElement}>
          <ForWhomCard
            icon={icon1}
            gif={gif1}
            position={6}
            title='Маленький бизнес'
            text='Ты только начал и мечтаешь выйти на уровень &quot;Apple&quot;.'
          />
        </li>

        <li className={styles.listElement}>
          <ForWhomCard
            icon={icon2}
            gif={gif2}
            position={7}
            title='Средний бизнес'
            text='Свой бизнес поставлен на поток, ты в поиске решений по дальнейшему развитию бренда.' 
          />
        </li>

        <li className={styles.listElement}>
          <ForWhomCard
            icon={icon3}
            gif={gif3}
            position={8}
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
