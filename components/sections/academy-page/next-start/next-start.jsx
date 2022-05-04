import styles from './next-start.module.css';
import Image from 'next/image';
import { nextStartImage } from '../../../../public/images/academy-page/index';
import ButtonPrimary from '../../../buttons/button-primary/button-primary';
import { useRouter } from 'next/router';

export default function NextStart() {
  const router = useRouter()

  return (
    <section className={styles.nextStart}>
      <div className={styles.content}>

        <article className={styles.card}>
          <div className={styles.image}>
            <Image sizes='fill' src={nextStartImage} alt='картинка-прикол' />
          </div>
          <p className={styles.cardText}>SMM-маркетолог &quot;Продвинутый курс&quot;</p>
        </article>

        <div className={styles.about}>
          <h2 className={styles.title}>Ближайший запуск</h2>
          <p className={styles.subtitle}>Успей на поток по скидочной цене</p>
          <div className={styles.button}>
            <ButtonPrimary
              text='Подробнее'
              clickHandler={() => router.push(router.pathname + '/learn-more')}
              color='1'
              size='middle'
              customFontSize='1.2vw'
            />
          </div>

        </div>

      </div>
    </section>
  )
}
