import styles from './framed-icon.module.css';
import Image from 'next/image';

export default function FramedIcon({ icon }) {
  return (
    <div className={styles.frame}>
      <div className={styles.iconContainer}>
        <Image src={icon} alt="иконка" />
      </div>
      
    </div>
  )
}
