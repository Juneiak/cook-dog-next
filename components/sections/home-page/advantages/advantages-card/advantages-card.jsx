import styles from './advantages-card.module.css'

export default function AdvantagesCard({ name, price, position, clickHandler, children }) {
  return (
    <article className={styles.card}>
      <div className={styles.header}>
        <h3 className={styles.name}>{name}</h3>
        <img src={`/images/icons/icon${position}.png`} alt="иконка ракеты" className={styles.logo} />
      </div>
     {children}
      <button onClick={clickHandler} className={styles.priceButton}><span>{price}</span></button>
    </article>
  )
}
