import styles from './knowledge-card.module.css';
import CardAbout from '../../../../card-about/card-about';
import Image from 'next/image';

export default function KnowledgeCard({ image, title, text }) {
  return (
    <article className={styles.card}>
      <div className={styles.image}>
        <Image sizes='fill' src={image} alt='картинка-прикол' />
      </div>
      <CardAbout 
        text={text}
        title={title}
      />
    </article>
  )
}
