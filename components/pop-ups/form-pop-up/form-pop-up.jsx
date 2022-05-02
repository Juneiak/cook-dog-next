import styles from './form-pop-up.module.css';
import PopUp from '../pop-up/pop-up';
import ButtonPrimary from '../../buttons/button-primary/button-primary';
import BitrixForm from '../../bitrix-form/bitrix-form';

export default function FormPopUp({ popUpHandler }) {
  return (
    <PopUp onCloseButtonClick={popUpHandler} >
      <section className={styles.formPopUp}>
        <BitrixForm isPopUp={true} />
      </section>
    </PopUp>
  )
}