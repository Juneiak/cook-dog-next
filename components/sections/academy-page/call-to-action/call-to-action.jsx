import styles from './call-to-action.module.css';
import CallToActionCard from './call-to-action-card/call-to-action-card';
import {
  callToActionImage1,
  callToActionImage2,
  callToActionImage3,
} from '../../../../public/images/academy-page/index';


export default function CallToAction() {
  return (
    <section className={styles.callToAction}>
      <div className={styles.content}>

        <div className={styles.about}>
          <h2 className={styles.title}>Прокачай сильные стороны своего Я</h2>
          <p className={styles.subtitle}>Выбери свое призвание, а мы поможем обучиться</p>
        </div>

        <ul className={styles.list}>
          <li className={styles.listElement}>
            <CallToActionCard 
              image={callToActionImage1}
              reverse={false}
              title='Решайся на изменения'
              text='У тебя есть что показать миру и людям? Прекрасно! Поставь перед собой цель, а мы дадим тебе знания и навыки. Для этого у нас есть все, что нужно: опыт, инструменты, экспертность!'
            />
          </li>

          <li className={styles.listElement}>
            <CallToActionCard 
              image={callToActionImage2}
              reverse={true}
              title='Решайся на изменения'
              text='У тебя есть что показать миру и людям? Прекрасно! Поставь перед собой цель, а мы дадим тебе знания и навыки. Для этого у нас есть все, что нужно: опыт, инструменты, экспертность!'
            />
          </li>

          <li className={styles.listElement}>
            <CallToActionCard 
              image={callToActionImage3}
              reverse={false}
              title='Решайся на изменения'
              text='У тебя есть что показать миру и людям? Прекрасно! Поставь перед собой цель, а мы дадим тебе знания и навыки. Для этого у нас есть все, что нужно: опыт, инструменты, экспертность!'
            />
          </li>
        </ul>
      </div>
    </section>
  )
}
