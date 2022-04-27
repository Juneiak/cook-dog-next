import styles from './video-pop-up.module.css';
import PopUp from '../pop-up/pop-up';


export default function VideoPopUp({ closeHandler, videoUrl }) {
  return (
    <PopUp onCloseButtonClick={closeHandler} >
      <section className={styles.videoPopUp}>
        <iframe
          width="100%"
          height="100%"
          src={videoUrl}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </section>
    </PopUp>
  )
}

{/* <iframe
src="https://vk.com/video_ext.php?oid=-346191&id=456239839&hash=5ba1299ac3b42ab5&hd=1&autoplay=1"
width="100%"
height="100%"
allow="autoplay; encrypted-media; fullscreen; picture-in-picture;"
frameborder="0"
allowFullScreen></iframe> */}