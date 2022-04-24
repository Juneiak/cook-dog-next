import styles from './about.module.css';
import ButtonPrimary from '../../buttons/button-primary/button-primary';

export default function About({ onPopUpButtonClick }) {
  return (
    <section className={styles.about}>
      <div className={styles.companyName}>
        <h1 className={styles.title}>CookDog</h1>
        <span className={styles.subtitle}>Собака. Повар. Агентство.</span>
        <ButtonPrimary clickHandler={onPopUpButtonClick} name="leave-contact" text='Начать' />
      </div>
      
      <div className={styles.container}>
        <h2 className={styles.aboutTitle}>Кто мы такие?</h2>
        <div className={styles.textContainer}>
          <p className={`${styles.text} ${styles.text320}`}>Мы - маркетинговое агентство Cookdog. Готовим сочный контент и прогреваем ваши продажи. В нашей команде 12 экспертов, которые знают и любят свое дело. Маркетологи, продукт-менеджеры, видеографы, копирайтеры, дизайнеры, smm-менеджеры, таргетологи, директологи, программисты.</p>
          <p className={styles.text}>Мы - маркетинговое агентство Cookdog.</p>
          <p className={styles.text}>Готовим сочный контент и прогреваем ваши продажи.</p>
          <p className={styles.text}>В нашей команде 12 экспертов, которые знают и любят свое дело.</p>
          <p className={styles.text}>Маркетологи, продукт-менеджеры, видеографы, копирайтеры, дизайнеры, smm-менеджеры, таргетологи, директологи, программисты.</p>
        </div>
        <p className={styles.subtext}>Мы умеем делать из обычного бизнеса офигенный.</p>
      </div>
    </section>
  )
}
