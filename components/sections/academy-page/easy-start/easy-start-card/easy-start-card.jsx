import styles from './easy-start-card.module.css';
import Image from 'next/image';
import ButtonPrimary from '../../../../buttons/button-primary/button-primary';

export default function EasyStartCard({image, title, buttonHandler}) {
  return (
    <article className={styles.card}>
      <div className={styles.image}>
        <Image sizes='fill' src={image} alt='картинка-прикол'/>
      </div>
      <p className={styles.title}>{title}</p>
      <ButtonPrimary 
        size='big'
        customFontSize='1.2vw'
        color='2'
        text="Скачать бесплатно"
        clickHandler={buttonHandler} 
      />
    </article>
  )
}
