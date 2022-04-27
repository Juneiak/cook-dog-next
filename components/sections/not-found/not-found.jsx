import styles from './not-found.module.css';
import Image from 'next/image';
import notFoundImage from '../../../public/images/404-image.png';
import ButtonPrimary from '../../buttons/button-primary/button-primary';
import { useRouter } from 'next/router';

export default function NotFound() {
  const router = useRouter()
  const handleGoBack = () => router.push('/')

  return (
    <div className={styles.notFound}>
      <h2 className={styles.title}>Ого,ты шустрый!</h2>
      <span className={styles.subtitle}>А мы тут, это, еще допиливаем сайт.</span>
      <Image src={notFoundImage} />
      <p className={styles.text}>Не обожгись об наши горящие дедлайны - иди в более спокойное место.</p>
        <div className={styles.button}>
          <ButtonPrimary
            cover={true}
            clickHandler={handleGoBack}
            text='ГАВ-ГАВ'
            name='go-back'
            color={2}
            size='middle'
          />
        </div>
        
    </div>
  )
}
