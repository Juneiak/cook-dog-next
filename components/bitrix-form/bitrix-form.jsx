import { useRef, useEffect, useState } from 'react';
import styles from './bitrix-form.module.css';
import ButtonPrimary from '../../components/buttons/button-primary/button-primary'
import BitrixFormInput from './bitrix-form-input/bitrix-form-input';

export default function BitrixForm({ isPopUp }) {
  // need some refactoring - add onError and update onLoad, maybe reduse some states
  const [ btxNameInput, setBtxNameInput ] = useState()
  const [ btxCompanyNameInput, setBtxCompanyNameInput ] = useState()
  const [ btxPhoneInput, setBtxPhoneInput ] = useState()
  const [ btxButton, setBtxButton ] = useState()

  const [ nameErrorMessage, setNameErrorMessage ] = useState('')
  const [ companyNameErrorMessage, setCompanyNameErrorMessage ] = useState('')
  const [ phoneErrorMessage, setPhoneErrorMessage ] = useState('')

  const [ buttonStatus, setButtonStatus ] = useState(false)

  const nameRef = useRef()
  const companyNameRef = useRef()
  const phoneRef = useRef()

  const formRef = useRef()
  const scriptRef = useRef()
  const btxContainerRef = useRef()


  useEffect(() => {
    const script = document.createElement('script');
    script.async=true;
    script.src='https://cdn-ru.bitrix24.ru/b21322336/crm/form/loader_20.js'+'?'+(Date.now()/180000|0);
    let name
    let companyName
    let phone
    let button
    let nameError
    let companyNameError
    let phoneError

    // it is 3 different functions for correct work of removeEventListener
    const nameInputListenerCallback = (event) => {
      nameRef.current.value = event.target.value
      nameRef.current.focus()
      checkFormValidity()
      if (nameError.textContent !== nameErrorMessage ) setNameErrorMessage(nameError.textContent)
      
    }

    const conpanyNameInputListenerCallback = (event) => {
      companyNameRef.current.value = event.target.value
      companyNameRef.current.focus()
      checkFormValidity()
      if (companyNameError.textContent !== companyNameErrorMessage) setCompanyNameErrorMessage(companyNameError.textContent)

    }

    const phoneInputListenerCallback = (event) => {
      phoneRef.current.value = event.target.value
      phoneRef.current.focus()
      checkFormValidity()
      if (phoneError.textContent !== phoneErrorMessage) setPhoneErrorMessage(phoneError.textContent)
    }

    script.onload = () => {
      setTimeout(() => {
        const inputDivs = btxContainerRef.current.querySelectorAll('.b24-form-field');
        name = inputDivs[0].querySelector('input');
        nameError = inputDivs[0].querySelector('.b24-form-control-alert-message');
        companyName = inputDivs[1].querySelector('input');
        companyNameError = inputDivs[1].querySelector('.b24-form-control-alert-message');
        phone = inputDivs[2].querySelector('input');
        phoneError = inputDivs[2].querySelector('.b24-form-control-alert-message');

        button = btxContainerRef.current.querySelector('button[type=submit');

        setBtxNameInput(name)
        setBtxCompanyNameInput(companyName)
        setBtxPhoneInput(phone)
        setBtxButton(button)
        if (name && companyName && phone && button) {
          name.addEventListener('input', nameInputListenerCallback)
          companyName.addEventListener('input', conpanyNameInputListenerCallback)
          phone.addEventListener('input', phoneInputListenerCallback)
        }
      }, 500);
    }
      scriptRef.current.parentNode.insertBefore(script, scriptRef.current);

      return () => {
        if (name || companyName || phone || button) {
          name.removeEventListener('input', nameInputListenerCallback)
          companyName.removeEventListener('input', conpanyNameInputListenerCallback)
          phone.removeEventListener('input', phoneInputListenerCallback)
        }
      }
  }, [])

  const checkFormValidity = () => {
    if (formRef.current.checkValidity()) {
      setButtonStatus(true)
      return
    }
    setButtonStatus(false)
  }

  return (
    <div className={styles.container}>
      <div ref={btxContainerRef} className={styles.fakeFormContainer}>
        <script ref={scriptRef} data-b24-form="inline/20/2moi1d" data-skip-moving="true"></script>
      </div>
      <form ref={formRef} className={styles.form}>
        <h2 className={`${styles.title} ${isPopUp ? styles.titleBlack : ''}`}>
          {isPopUp ? 'Оставь заявку, мы с тобой свяжемся' : 'Хочешь расти? Запишись к нам на консультацию!'}
        </h2>
        <div className={styles.inputsContainer}>
          <BitrixFormInput
            inputTitle = 'Имя'
            isPopUpState = {isPopUp}
            onKeyDownHandler = {() => btxNameInput.focus()}
            inputRef = {nameRef}
            inputType = "text"
            isRequired = {true}
            inputPlaceholder = "Ваше имя"
            errorMessage = {nameErrorMessage}
          />
          <BitrixFormInput
            inputTitle = 'Компания'
            isPopUpState = {isPopUp}
            onKeyDownHandler = {() => btxCompanyNameInput.focus()}
            inputRef = {companyNameRef}
            inputType = "text"
            inputPlaceholder = "Название компании"
            errorMessage = {companyNameErrorMessage}
          />
          <BitrixFormInput
            inputTitle = 'Телефон'
            isPopUpState = {isPopUp}
            onKeyDownHandler = {() => btxPhoneInput.focus()}
            inputRef = {phoneRef}
            inputType = "tel"
            isRequired = {true}
            inputMinLength={5}
            inputPlaceholder = "+7 (999) 999-99-99"
            errorMessage = {phoneErrorMessage}
          />
        </div>
        <ButtonPrimary
          isValid={buttonStatus}
          clickHandler={() => btxButton.click()}
          stylesClass={styles.button}
          name="send-contact"
          text='Записаться'
        />
      </form>
    </div>
  )
}