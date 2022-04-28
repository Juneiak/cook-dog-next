import styles from './form-section.module.css';
import ButtonPrimary from '../../buttons/button-primary/button-primary';

export default function FormSection({ onPopUpButtonClick }) {
  return (
    <section className={styles.formSection}>
      <form  className={styles.form}>
        <div className={styles.container}>
          <h2 className={styles.title}>Хочешь расти? Запишись к нам на консультацию!</h2>
          <div className={styles.inputsContainer}>
            <input
              type="text"
              placeholder="Ваше имя"
              required
              className={styles.input}
            />
            <input
              type="text"
              placeholder="Название компании"
              className={styles.input}
            />
            <input
              type="tel"
              minLength="10"
              maxLength="20"
              required
              placeholder="+7 (999) 999-99-99"
              className={styles.input}
            />
          </div>
          <ButtonPrimary clickHandler={() => false} stylesClass={styles.button} name="send-contact" text='Записаться' />
        </div>
      </form>
      <div className={styles.sectionButtonContainer}>
        <h2 className={styles.sectionTitle}>Хочешь расти? Запишись к нам на консультацию!</h2>
        <ButtonPrimary clickHandler={onPopUpButtonClick} name="leave-contact" text='Записаться' />
      </div>
    </section>
  )
}
