import styles from './form-section.module.css';
import ButtonPrimary from '../../../buttons/button-primary/button-primary';
import BitrixForm from '../../../bitrix-form/bitrix-form';


export default function FormSection({ onPopUpButtonClick }) {  


  return (
    <section className={styles.formSection}>
      <div className={styles.formContainer}>
        <BitrixForm />
      </div>
      <div className={styles.sectionButtonContainer}>
        <h2 className={styles.sectionTitle}>Хочешь расти? Запишись к нам на консультацию!</h2>
        <ButtonPrimary clickHandler={onPopUpButtonClick} name="leave-contact" text='Записаться' />
      </div>
    </section>
  )
}
