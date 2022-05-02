import styles from './what-we-do-card.module.css'

import CardAbout from '../../../../card-about/card-about'
import FramedGif from '../../../../framed-gif/framed-gif'

export default function WhatWeDoCard({ title, text, icon, gif, position }) {
  return (
    <article className={styles.card}>
      <FramedGif icon={icon} gif={gif} position={position} />
      <CardAbout title={title} text={text} inRow={true} />
    </article>
  )
}
