import styles from './pop-up.module.css'

export default function PopUp({ children, onCloseButtonClick }) {
  return (
    <div id="pop-up" className={styles.popUp}>
      <button onClick={onCloseButtonClick} type="button" id="pop-up-close-button" className={styles.closeButton}></button>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  )
}
