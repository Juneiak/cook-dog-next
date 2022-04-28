import { useRef, useEffect } from 'react';
import styles from './bitrix-form.module.css';

export default function BitrixForm() {

  const formRef = useRef()

  useEffect(() => {
    const script = document.createElement('script');
    script.async=true;
    script.src='https://cdn-ru.bitrix24.ru/b21322336/crm/form/loader_16.js'+'?'+(Date.now()/180000|0);
    formRef.current.parentNode.insertBefore(script,formRef.current);
  }, [])

  return (
    <div className={styles.form}>
      <div className={styles.content}>
        <script ref={formRef} data-b24-form="inline/16/18x1ee" data-skip-moving="true"></script>
      </div>
    </div>

  )
}

{/* <script data-b24-form="inline/16/18x1ee" data-skip-moving="true">
      (function(w,d,u){
      var s=d.createElement('script');
      s.async=true;
      s.src=u+'?'+(Date.now()/180000|0);
      var h=d.getElementsByTagName('script')[0];
      h.parentNode.insertBefore(s,h);
      })(window,document,'https://cdn-ru.bitrix24.ru/b21322336/crm/form/loader_16.js');
    </script> */}