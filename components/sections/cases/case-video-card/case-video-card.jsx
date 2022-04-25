import styles from './case-video-card.module.css'
import { useRef } from 'react';

export default function CaseVideoCard({ onClick }) {
  const refContainer = useRef();

  const handlePlayVideo = () => {
    refContainer.current.play()
  }
  const handleStopVideo = () => {
    refContainer.current.pause();
    refContainer.current.currentTime = 0;
  }
  
  return (
    <article
      onClick={onClick}
      onMouseOver={handlePlayVideo}
      onMouseOut={handleStopVideo}
      className={styles.card}
    >
      <div className={styles.frame}></div>
      <div className={styles.content}>
        <img src={`/images/companies-logo/2.png`} alt="лого компании" className={styles.image} />
        <div className={styles.about}>
          <video ref={refContainer} className={styles.video} autoPlay loop muted >
            <source src='/1.mp4' type='video/mp4'></source>
          </video>
        </div>
      </div>
    </article>
  )
}
