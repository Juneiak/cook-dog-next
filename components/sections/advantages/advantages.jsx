import styles from './advantages.module.css';
import cardStyles from './advantages-card/advantages-card.module.css';

import AdvantagesCard from './advantages-card/advantages-card'
import SectionTitle from '../../section-title/section-title';

export default function Advantages() {
  return (
    <section id='advantages' className={styles.advantages}>
      <div className={styles.about}>
        <SectionTitle position='3' text='Уже не терпится с нами поработать?' />
      </div>
      <ul className={styles.list}>
        <li className={styles.listElement}>
          <AdvantagesCard price='ОТ 300.000 РУБ' name='LAUNCH' position={12}>
            <ul className={cardStyles.list}>
              <li className={cardStyles.listElement}>– Разработка глобальной стратегии бренда;</li>
              <li className={cardStyles.listElement}>– Создание уникального фирменного стиля;</li>
              <li className={cardStyles.listElement}>– Генерация стартового контента;</li>
              <li className={cardStyles.listElement}>– Организация платформы для посадки клиентов;</li>
              <li className={cardStyles.listElement}>– Привлечение первых клиентов;</li>
              <li className={cardStyles.listElement}>– Создание руководства по дальнейшему развитию.</li>
            </ul>
          </AdvantagesCard>
        </li>

        <li className={styles.listElement}>
          <AdvantagesCard price='ОТ 50.000 РУБ' name='ПОДДЕРЖКА' position={13}>
            <ul className={cardStyles.list}>
              <li className={cardStyles.listElement}>– Поддержание или запуск конкретного направления (Tik-Tok, Instagram и т.д.);</li>
              <li className={cardStyles.listElement}>– Разработка стратегии продвижения;</li>
              <li className={cardStyles.listElement}>– Составление контент-плана;</li>
              <li className={cardStyles.listElement}>– Генерация уникального контента;</li>
              <li className={cardStyles.listElement}>– Привлечение новых клиентов на выбранную платформу.</li>

            </ul>
          </AdvantagesCard>
        </li>

        <li className={styles.listElement}>
          <AdvantagesCard price='ОТ 70.000 РУБ' name='БРЕНДИНГ' position={14}>
            <ul className={cardStyles.list}>
              <li className={cardStyles.listElement}>– Определение глобальной миссии компании;</li>
              <li className={cardStyles.listElement}>– Создание уникального фирменного стиля;</li>
              <li className={cardStyles.listElement}>– Цветовая палитра;</li>
              <li className={cardStyles.listElement}>– Подбор шрифтов;</li>
              <li className={cardStyles.listElement}>– Привлечение первых клиентов;</li>
              <li className={cardStyles.listElement}>– Создание руководства по использованию фирменного стиля.</li>
              <li className={cardStyles.listElement}>– Создание логотипа</li>
            </ul>
          </AdvantagesCard>
        </li>
      </ul>
    </section>
  )
}
