import styles from './success.module.css';
import { useRouter } from 'next/router';
import ButtonPrimary from '../buttons/button-primary/button-primary';

export default function Success() {
  const router = useRouter()
  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <h1 className={styles.message}>SUCCESS!</h1>
        <ButtonPrimary text='go back' clickHandler={() => router.push('/')}/>
      </div>
    </main>
    
  )
}
