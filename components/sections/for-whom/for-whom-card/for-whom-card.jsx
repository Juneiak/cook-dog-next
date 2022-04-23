import styles from './for-whom-card.module.css'
import FramedIcon from '../../../framed-icon/framed-icon'
import CardAbout from '../../../card-about/card-about'

export default function ForWhomCard({ title, text, icon}) {
  return (
    <article className={styles.card}>
      <FramedIcon icon={icon} />
      <CardAbout title={title} text={text} />
    </article>
  )
}
