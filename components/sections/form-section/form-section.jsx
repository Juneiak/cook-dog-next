import styles from './form-section.module.css';
import ButtonPrimary from '../../buttons/button-primary/button-primary';
import BitrixForm from '../../bitrix-form/bitrix-form';


export default function FormSection({ onPopUpButtonClick }) {  


  return (
    <section className={styles.formSection}>

      <BitrixForm />

      {/* <form  className={styles.form}>
        <div className={styles.container}>
          <h2 className={styles.title}>Хочешь расти? Запишись к нам на консультацию!</h2>
          <div className={styles.inputsContainer}>
            <input
              ref={nameRef}
              type="text"
              placeholder="Ваше имя"
              required
              className={styles.input}
              onKeyDown={}
            />
            <input
              ref={companyNameRef}
              type="text"
              placeholder="Название компании"
              className={styles.input}
              onKeyDown={}
            />
            <input
              ref={phoneRef}
              type="tel"
              minLength="10"
              maxLength="20"
              required
              placeholder="+7 (999) 999-99-99"
              className={styles.input}
              onKeyDown={}
            />
          </div>
          <ButtonPrimary buttoRef={buttonRef} stylesClass={styles.button} name="send-contact" text='Записаться' />
        </div>
      </form> */}
      <div className={styles.sectionButtonContainer}>
        <h2 className={styles.sectionTitle}>Хочешь расти? Запишись к нам на консультацию!</h2>
        <ButtonPrimary clickHandler={onPopUpButtonClick} name="leave-contact" text='Записаться' />
      </div>
    </section>
  )
}
