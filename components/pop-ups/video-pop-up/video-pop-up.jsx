import styles from './video-pop-up.module.css';
import PopUp from '../pop-up/pop-up';


export default function VideoPopUp({ popUpHandler }) {
  return (
    <PopUp onCloseButtonClick={popUpHandler} >
      <section className={styles.videoPopUp}>
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/GYDS6woFhZM?autoplay=1&iv_load_policy=3"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </section>
    </PopUp>
  )
}
