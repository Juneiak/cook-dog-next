import styles from './bad-ways.module.css';
import cardStyles from './bad-ways-card/bad-ways-card.module.css';

import BadWaysCard from './bad-ways-card/bad-ways-card';
import ButtonPrimary from '../../../buttons/button-primary/button-primary';

export default function BadWays({ onPopUpButtonClick }) {
  return (
    <section id='badWays' className={styles.badWays}>
    <div className={styles.about}>
      <h2 className={styles.title}>Твоя личная команда маркетинга на удаленке</h2>
      <span className={styles.subtitle}>Давай разберем как обычно делают бизнесмены и почему так делать не стоит:</span>
    </div>
    <ul className={styles.list}>
      <li className={styles.listElement}>
        <BadWaysCard title='НАБРАТЬ ОТДЕЛ МАРКЕТИНГА В ШТАТ' total='Итог: Много затрат, нервов и результат только через полгода.'>
          <img src="/images/icons/icon9.png" alt="иконка спецов" className={cardStyles.icon} />
          <ul className={cardStyles.consList}>
            <li className={cardStyles.con}>
              <p className={cardStyles.conText}>Спецы стоят очень дорого</p>
              <ul className={cardStyles.conSubtextList}>
                <li><p className={cardStyles.conSubtext}>– Их очень мало</p></li>
                <li><p className={cardStyles.conSubtext}>– Нужен большой штат (дизайнеры,копирайтеры,СММ и пр.)</p></li>
              </ul>
            </li>

            <li className={cardStyles.con}>
              <p className={cardStyles.conText}>Вряд-ли ты знаешь что хорошо, а что плохо и умеешь руководить творческим коллективом</p>
            </li>

            <li className={cardStyles.con}>
              <p className={cardStyles.conText}>Куча затрат на:</p>
              <ul className={cardStyles.conSubtextList}>
                <li><p className={cardStyles.conSubtext}>– Дорогое профессиональное оборудование (камеры,свет и тд.)</p></li>
                <li><p className={cardStyles.conSubtext}>– Аренда офиса</p></li>
                <li><p className={cardStyles.conSubtext}>– Покупка компьютерной техники</p></li>
              </ul>
            </li>
          </ul>
        </BadWaysCard>
      </li>

      <li className={styles.listElement}>
        <BadWaysCard title='ВЕСТИ МАРКЕТИНГ САМОМУ ИЛИ ПОПРОСИТЬ ЖЕНУ/ПОДРУГУ' total='Итог: Много затрат, нервов и результат только через полгода.'>
          <img src="/images/icons/icon10.png" alt="иконка спецов" className={cardStyles.icon} />
          <ul className={cardStyles.consList}>
            <li className={cardStyles.con}>
              <p className={cardStyles.conText}>Привет, расфокус внимания</p>
              <ul className={cardStyles.conSubtextList}>
                <li><p className={cardStyles.conSubtext}>– Нужно придумать стратегию</p></li>
                <li><p className={cardStyles.conSubtext}>– Арендовать студию</p></li>
                <li><p className={cardStyles.conSubtext}>– Оплатить счета</p></li>
                <li><p className={cardStyles.conSubtext}>– Обработать контент</p></li>
                <li><p className={cardStyles.conSubtext}>– Написать и выложить пост</p></li>
              </ul>
            </li>

            <li className={cardStyles.con}>
              <p className={cardStyles.conText}>Весь маркетинг завязан на одном человеке</p>
              <ul className={cardStyles.conSubtextList}>
                <li><p className={cardStyles.conSubtext}>– Вдруг не хватит времени на все?</p></li>
                <li><p className={cardStyles.conSubtext}>– Нет желания</p></li>
                <li><p className={cardStyles.conSubtext}>– Непрофессиональный контент</p></li>
                <li><p className={cardStyles.conSubtext}>– Не видишь свой продукт со стороны</p></li>
              </ul>
            </li>
          </ul>
        </BadWaysCard>
      </li>

      <li className={styles.listElement}>
        <BadWaysCard title='НАЙТИ ТОЛПУ ФРИЛАНСЕРОВ НА КАЖДОЕ ЗАНЯТИЕ' total='Итог: У бренда есть более-менее контент,но он не вызывает доверия. Цена - ваши седые волосы.'>
          <img src="/images/icons/icon11.png" alt="иконка спецов" className={cardStyles.icon} />
          <ul className={cardStyles.consList}>
            <li className={cardStyles.con}>
              <p className={cardStyles.conText}>Сложно найти общий язык</p>
              <ul className={cardStyles.conSubtextList}>
                <li><p className={cardStyles.conSubtext}>– Увы, но иногда кидают на деньги и нарушают сроки.</p></li>
                <li><p className={cardStyles.conSubtext}>– Не выходят на связь</p></li>
              </ul>
            </li>

            <li className={cardStyles.con}>
              <p className={cardStyles.conText}>Нет слаженной командной работы</p>
              <ul className={cardStyles.conSubtextList}>
                <li><p className={cardStyles.conSubtext}>–...и общего понимания стратегии.</p></li>
                <li><p className={cardStyles.conSubtext}>– Не несут ответственности за результат.</p></li>
              </ul>
            </li>

            <li className={cardStyles.con}>
              <p className={cardStyles.conText}>Используют непонятное оборудование.</p>
            </li>

            <li className={cardStyles.con}>
              <p className={cardStyles.conText}>Называют неоправданные цены.</p>
            </li>
          </ul>
        </BadWaysCard>
      </li>
    </ul>
    <div className={styles.button}>
      <ButtonPrimary clickHandler={onPopUpButtonClick} name="leave-contact" text='Расслабиться' />

    </div>
  </section>
  )
}
