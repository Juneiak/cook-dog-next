import { useRef, useEffect, useState } from 'react';
import styles from './bitrix-form.module.css';
import ButtonPrimary from '../../components/buttons/button-primary/button-primary'

export default function BitrixForm() {

  const [ btxNameInput, setBtxNameInput ] = useState()
  const [ btxCompanyNameInput, setBtxCompanyNameInput ] = useState()
  const [ btxPhoneInput, setBtxPhoneInput ] = useState()
  const [ btxButton, setBtxButton ] = useState()

  const [ btxInputsDiv, setBtxInputsDiv ] = useState()


  const nameRef = useRef()
  const companyNameRef = useRef()
  const phoneRef = useRef()
  
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

  let inputDivs

  script.onload = () => {
    setTimeout(() => {
      inputDivs = btxContainerRef.current.querySelectorAll('.b24-form-field');
      name = inputDivs[0].querySelector('input');
      const nameError = inputDivs[0].querySelector('.b24-form-control-alert-message');

      companyName = inputDivs[1].querySelector('input');
      phone = inputDivs[2].querySelector('input');
      button = btxContainerRef.current.querySelector('button[type=submit');
      
      // it is 3 different functions for correct work of removeEventListener
      const nameInputListenerCallback = (event) => {
        nameRef.current.value = event.target.value
        nameRef.current.focus()
        console.log(nameError.textContent.length === 7);
      }

      const conpanyNameInputListenerCallback = (event) => {
        companyNameRef.current.value = event.target.value
        companyNameRef.current.focus()
      }

      const phoneInputListenerCallback = (event) => {
        phoneRef.current.value = event.target.value
        phoneRef.current.focus()
      }
      setBtxInputsDiv(inputDivs)

      setBtxNameInput({input: name, error: nameError})
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

  return (
    <form  className={styles.form}>
      <div ref={btxContainerRef} className={styles.formContainer}>
        <script ref={scriptRef} data-b24-form="inline/20/2moi1d" data-skip-moving="true"></script>
      </div>
      <div className={styles.container}>
        <h2 className={styles.title}>Хочешь расти? Запишись к нам на консультацию!</h2>
        <div className={styles.inputsContainer}>
          <input
            ref={nameRef}
            type="text"
            placeholder="Ваше имя"
            required
            className={`${styles.input} ${btxNameInput?.error?.textContent ? styles.inputError : ''}`}
            onKeyDown={() => btxNameInput.input.focus()}
          />
          <input
            ref={companyNameRef}
            type="text"
            placeholder="Название компании"
            className={styles.input}
            onKeyDown={() => btxCompanyNameInput.focus()}
          />
          <input
            ref={phoneRef}
            type="tel"
            minLength="10"
            maxLength="20"
            required
            placeholder="+7 (999) 999-99-99"
            className={styles.input}
            onKeyDown={() => btxPhoneInput.focus()}
          />
        </div>
        <ButtonPrimary isValid={false} clickHandler={() => btxButton.click()} stylesClass={styles.button} name="send-contact" text='Записаться' />
      </div>
    </form>
  )
}

// function loadScript(src) {
//   return new Promise(function(resolve, reject) {
//     const s = document.createElement('script');
//     let r = false;
//     s.type = 'text/javascript';
//     s.src = src;
//     s.async = true;
//     s.onerror = function(err) {
//       reject(err, s);
//     };
//     s.onload = s.onreadystatechange = function() {
//       // console.log(this.readyState); // uncomment this line to see which ready states are called.
//       if (!r && (!this.readyState || this.readyState == 'complete')) {
//         r = true;
//         resolve();
//       }
//     };
//     const t = document.getElementsByTagName('script')[0];
//     t.parentElement.insertBefore(s, t);
//   });
// }