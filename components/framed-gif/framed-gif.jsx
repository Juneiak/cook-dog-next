import styles from './framed-gif.module.css';
import Image from 'next/image';

export default function FramedGif({ icon, gif, position }) {
  return (
    <div className={styles.framedGif}>
      <div className={`${styles.icon} ${styles['iconPosition'+position]}`}>
        <Image src={icon} alt="иконка" />
      </div>
      <div className={`${styles.gif} ${styles['gifPosition'+position]}`}>
        <Image src={gif} alt="гифка" />
      </div>
    </div>
  )
}
