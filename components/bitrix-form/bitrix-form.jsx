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