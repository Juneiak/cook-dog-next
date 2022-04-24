import styles from './button-primary.module.css';


export default function ButtonPrimary({ text, clickHandler, name, stylesClass=null }) {
  
  return (
    <button
      onClick={clickHandler}
      name={name}
      type='button'
      className={`${styles.button} ${stylesClass && stylesClass}`}
    >
      <img src='/images/ui/button-primary.png' className={styles.image} alt="иконка кнопки"  />
      <span className={styles.text}>{text}</span>
    </button>
    
  )
}
