import styles from './button-primary.module.css';

export default function ButtonPrimary({
  isValid = true,
  buttoRef,
  text,
  clickHandler,
  name,
  cover = false,
  size = 'big',
  color = 1,
  ownFontSize = '',
  }) {
  // size = 'small' / 'middle' / 'big'
  // color = 1-pink / 2-fadePink / 3-blue
  let customStyle = cover ? {height: '100%'} : {}

  return (
    <button
      ref={buttoRef}
      onClick={clickHandler}
      name={name}
      type='button'
      className={`${styles.button} ${ isValid ? '' :styles.buttonDisabled}`}
      style={customStyle}
      disabled={!isValid}
    >
      <img src={`/images/ui/buttons/${size}-${color}.png`} className={styles.image} alt="иконка кнопки"  />
      <span style={{fontSize: ownFontSize}} className={`${styles.text} ${styles[size + 'Text']}`}>{text}</span>
    </button>
    
  )
}
