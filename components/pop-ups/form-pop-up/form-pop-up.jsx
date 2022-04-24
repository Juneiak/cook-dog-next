import styles from './form-pop-up.module.css';
import PopUp from '../pop-up/pop-up';

export default function FormPopUp({ popUpHandler }) {
  return (
    <PopUp onCloseButtonClick={popUpHandler} >
      <section className={styles.formPopUp}>
        <form  className={styles.form}>
          <h3 className={styles.title}>Оставь заявку, мы с тобой свяжемся</h3>
          <fieldset className={styles.inputsContainer}>
            <label className={styles.inputTag}>
              Имя
              <input
                className={styles.input}
                type="text"
                placeholder="Имя"
                minLength="2"
                maxLength="30"
              />
            </label>
            <label className={styles.inputTag}>
              Компания
              <input
                className={styles.input}
                type="text"
                placeholder="Название компании"
                minLength="2"
                maxLength="50"
              />
            </label>
            <label className={styles.inputTag}>
              Телефон
              <input
                className={styles.input}
                type="text"
                placeholder="+7 (999) 999-99-99"
                minLength="2"
                maxLength="30"
              />
            </label>
          </fieldset>
          <button type="button" className={`button ${styles.button}`}>Отправить</button>
        </form>
      </section>
    </PopUp>
  )
}
