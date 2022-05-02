import styles from './team-card.module.css'

export default function TeamCard({ name, power, bonus, position }) {
  return (
    <article id='teamCard' className={styles.card}>
      <div id='teamCardImage' className={styles.image}></div>
      <img 
        src={`./images/avatars/${position}.png`}
        alt="аватар"
        className={styles.avatar}
      />
      <div className={styles.content}>
        <span className={styles.name}>{name}</span>
        <div className={styles.about}>
          <p className={styles.power}>{power}</p>
          <p className={styles.bonus}>{bonus}</p>
        </div>
      </div>
    </article>
  )
}
