import styles from './knowledge.module.css';
import KnowledgeCard from './knowledge-card/knowledge-card';

import {
  knowledgeImage1,
  knowledgeImage2,
  knowledgeImage3
} from '../../../../public/images/academy-page';

export default function Knowledge() {
  return (
    <section className={styles.knowledge}>
      <div className={styles.content}>
        <h2 className={styles.title}>Актуальные знания от практикующих специалистов</h2>
        <ul className={styles.list}>
          <li className={styles.listElement}>
            <KnowledgeCard 
              image={knowledgeImage1}
              title='Настоящий опыт'
              text='У нашей команды солидный опыт работы с проектами в разных сегментах бизнеса. Рады поделиться этим опытом с вами!'
            />
          </li>

          <li className={styles.listElement}>
            <KnowledgeCard 
              image={knowledgeImage2}
              title='Поддержка'
              text='Наши кураторы хорошо обучены правильно мотивировать тебя, чтобы точно довести до результата.'
            />
          </li>

          <li className={styles.listElement}>
            <KnowledgeCard 
              image={knowledgeImage3}
              title='Приглашенные спикеры'
              text='Так же мы приглашаем талантливых спикеров для тем, в которых сами не разбираемся. Например мода, лепка и тд.'
            />
          </li>
        </ul>
      </div>
    </section>
  )
}
