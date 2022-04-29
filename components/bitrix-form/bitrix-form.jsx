import { useRef, useEffect, useState } from 'react';
import styles from './bitrix-form.module.css';

export default function BitrixForm() {

  const formRef = useRef();
  const btContainerRef = useRef()
  const inputRef = useRef()
  const [ phone, setPhone ] = useState();
  const [ btn, setBtn ] = useState();


  const [ phoneInput, setPhoneInput ] = useState('')

  const bitrixInputListener = (evt) => {
    setPhoneInput(evt.target.value)
    inputRef.current.focus()

  }
  useEffect(() => {
    
    setTimeout(() => {
      const phoneInput = btContainerRef.current.querySelector('input[name=phone]')
      const bitrixButton = btContainerRef.current.querySelector('button[type=submit')

      if (phoneInput && bitrixButton) {
        setPhone(phoneInput)
        setBtn(bitrixButton)
        phoneInput.addEventListener('input', bitrixInputListener)

      }
      return () => {
        phoneInput.removeEventListener('input', bitrixInputListener)
      }
    }, 500)
  }, [btContainerRef])


  const handlePhoneInputChange = (evt) => {
    phone.value = evt.target.value
    setPhoneInput(phone.value)
  }

  const handler= () => {
    phone.focus()
  }

  const handleFakeButtonClick = () => {
    if (btn) btn.click()
    console.log(btn)
  }

  useEffect(() => {
    const script = document.createElement('script');
    script.async=true;
    script.src='https://cdn-ru.bitrix24.ru/b21322336/crm/form/loader_18.js'+'?'+(Date.now()/180000|0);
    formRef.current.parentNode.insertBefore(script,formRef.current);
    script.onload = () => console.log('script loaded')
  }, [])

  return (
    <div ref={btContainerRef} className={styles.form}>

      <input ref={inputRef} value={phoneInput} onKeyDown={handler} onChange={handlePhoneInputChange} placeholder='phone' type='text'></input>

      <button onClick={handleFakeButtonClick}>FakeButton</button>
      <script ref={formRef} data-b24-form="inline/18/w6a38d" data-skip-moving="true"></script>
    </div>

  )
}

{/* <script data-b24-form="inline/20/2moi1d" data-skip-moving="true">
	(function(w,d,u){
		var s=d.createElement('script');s.async=true;s.src=u+'?'+(Date.now()/180000|0);
		var h=d.getElementsByTagName('script')[0];h.parentNode.insertBefore(s,h);
	})(window,document,'https://cdn-ru.bitrix24.ru/b21322336/crm/form/loader_20.js');
</script> */}