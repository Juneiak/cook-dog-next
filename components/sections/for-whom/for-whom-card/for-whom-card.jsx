import styles from './for-whom-card.module.css';
import FramedGif from '../../../framed-gif/framed-gif';
import CardAbout from '../../../card-about/card-about';

export default function ForWhomCard({ title, text, icon, gif, position}) {
  return (
    <article className={styles.card}>
      <FramedGif icon={icon} gif={gif} position={position}/>
      <CardAbout title={title} text={text} />
    </article>
  )
}
