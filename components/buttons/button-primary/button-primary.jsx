import styles from './button-primary.module.css';


export default function ButtonPrimary({
  text,
  clickHandler,
  name,
  cover=false,
  size='big',
  color=1
  }) {
  // size = 'small' / 'middle' / 'big'
  // color = 1-pink / 2-fadePink / 3-blue
  let customStyle = cover ? {height: '100%'} : {}

  return (
    <button
      onClick={clickHandler}
      name={name}
      type='button'
      className={styles.button}
      style={customStyle}
    >
      <img src={`/images/ui/buttons/${size}-${color}.png`} className={styles.image} alt="иконка кнопки"  />
      <span className={styles.text}>{text}</span>
    </button>
    
  )
}
