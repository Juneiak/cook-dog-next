import styles from './call-to-action-card.module.css';
import CardAbout from '../../../../card-about/card-about';
import Image from 'next/image';

export default function CallToActionCard({ image, reverse, title, text }) {
  return (
    <article className={`${styles.card} ${reverse ? styles.cardReverse : ''}`}>
      <div className={styles.image}>
        <Image src={image} sizes='fill' alt='мотивирующая картинка' />
      </div>
      <div className={styles.text}>
        <CardAbout
            text={text}
            title={title}
            inRow={true}
            titleStart={true}
          />
      </div>


    </article>
  )
}
