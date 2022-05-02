import styles from './case-video-card.module.css'
import { useRef } from 'react';

export default function CaseVideoCard({ openVideoPopUpHandler, data: {position, youtubeUrl} }) {
  const refContainer = useRef();

  const handlePlayVideo = () => {
    refContainer.current.play()
  }
  const handleStopVideo = () => {
    refContainer.current.pause();
    refContainer.current.currentTime = 0;
  }

  const handleClick = () => openVideoPopUpHandler(youtubeUrl)
  
  return (
    <article
      onClick={handleClick}
      onMouseOver={handlePlayVideo}
      onMouseOut={handleStopVideo}
      className={styles.card}
    >
      <div className={styles.frame}></div>
      <div className={styles.content}>
        <img src={`/images/companies-logo/${position}.png`} alt="лого компании" className={styles.image} />
        <div className={styles.about}>
          <video ref={refContainer} className={styles.video} autoPlay loop muted >
            <source src={`/videos/${position}.mp4`} type='video/mp4'></source>
          </video>
        </div>
      </div>
    </article>
  )
}
