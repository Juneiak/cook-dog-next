import styles from './pop-up.module.css'

export default function PopUp({ children }) {
  return (
    <div id="pop-up" className={styles.popUp}>
      <button type="button" id="pop-up-close-button" className={styles.closeButton}></button>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  )
}
