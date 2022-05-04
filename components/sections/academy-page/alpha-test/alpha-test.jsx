import styles from './alpha-test.module.css';
import ButtonPrimary from '../../../buttons/button-primary/button-primary';
import { useRouter } from 'next/router';

export default function AlphaTest() {

  const router = useRouter()

  return (
    <section className={styles.alphaTest}>
      <div className={styles.content}>
        <h2 className={styles.title}>Альфа-Тест</h2>
        <p className={styles.subtitle}>Это выгодная подписка по тестированию курсов перед запуском на площадке. Получи обучение от экспертов по цене чашки кофе!</p>
        <div className={styles.button}>
          <ButtonPrimary
            text='Подробнее'
            clickHandler = {() => router.push(router.pathname + '/read-more')}
            color='1'
            size='middle'
            customFontSize='1.2vw'
          />
        </div>
      </div>
    </section>
  )
}
