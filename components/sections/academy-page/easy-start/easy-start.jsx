import styles from './easy-start.module.css';
import { useRouter } from 'next/router';
import EasyStartCard from './easy-start-card/easy-start-card';
import {
  easyStartImage1,
  easyStartImage2
} from '../../../../public/images/academy-page';

export default function EasyStart() {
  const router = useRouter()

  return (
    <section className={styles.easyStart}>
      <div className={styles.content}>

        <div className={styles.about}>
          <h2 className={styles.title}>
            Начать просто.
            <span className={styles.titlePart}>Пробуйте</span>
          </h2>
          <p className={styles.subtitle}>Все бесплатные материалы</p>
        </div>

        <ul className={styles.list}>
          <li className={styles.listElement}>
            <EasyStartCard
              title='Мастер-класс "ВК для бизнеса"'
              image={easyStartImage1}
              buttonHandler={() => router.push('/vk-course')}
            />
          </li>

          <li className={styles.listElement}>
            <EasyStartCard
              title='Мастер-класс "Стартап с нуля"'
              image={easyStartImage2}
              buttonHandler={() => router.push('/startup-course')}
            />
          </li>
        </ul>
      </div>
    </section>
  )
}
