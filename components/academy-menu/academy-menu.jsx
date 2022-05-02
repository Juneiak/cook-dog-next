import styles from './academy-menu.module.css'
import { academyMenuData } from '../../public/data';
import { useRouter } from 'next/router';

export default function AcademyMenu() {
  const router = useRouter()
  
  return (
    <ul className={styles.list}>
      {
        academyMenuData.map((element, index) => (
          <li key={index} className={styles.listElement}>
            <button
              onClick={() => router.push(router.pathname + element.url)}
              className={styles.button}
            >
              {element.name}
            </button>
          </li>
        ))
      }
    </ul>
  )
}
