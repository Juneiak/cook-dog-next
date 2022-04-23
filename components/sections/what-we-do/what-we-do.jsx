import styles from './what-we-do.module.css';

import WhatWeDoCard from './what-we-do-card/what-we-do-card';

import icon1 from '../../../public/images/gif/icon1.png';
import gif1 from '../../../public/images/gif/gif1.gif';

import icon2 from '../../../public/images/gif/icon2.png';
import gif2 from '../../../public/images/gif/gif2.gif';

import icon3 from '../../../public/images/gif/icon3.png';
import gif3 from '../../../public/images/gif/gif3.gif';

import icon4 from '../../../public/images/gif/icon4.png';
import gif4 from '../../../public/images/gif/gif4.gif';

import icon5 from '../../../public/images/gif/icon5.png';
import gif5 from '../../../public/images/gif/gif5.gif';

export default function WhatWeDo() {
  return (
    <section className={styles.whatWeDo}>
      <h2 className={styles.title}>Что мы сделаем:</h2>
      <ul className={styles.list}>
        <li className={styles.listElement}>
          <WhatWeDoCard
          icon={icon1}
          gif={gif1}
          title='Проведем комплексный анализ'
          text='Найдем твою целевую аудиторию и самых опасных конкурентов'
          position={1}
        />
        </li>
        <li className={styles.listElement}>
          <WhatWeDoCard
          icon={icon2}
          gif={gif2}
          title='Настроим таргет и контекст'
          text='Не пальцем в небо, а четко в твою ЦА. Привлечем клиентов по минимальной цене'
          position={2}
        />
        </li>

        <li className={styles.listElement}>
          <WhatWeDoCard
          icon={icon3}
          gif={gif3}
          title='Создадим персональную стратегию'
          text='Проведем анализ ниши и продукта. Подготовим план для успешного запуска. Ты будешь расти своим собственным путем'
          position={3}
        />
        </li>

        <li className={styles.listElement}>
          <WhatWeDoCard
          icon={icon4}
          gif={gif4}
          title='Подготовим контент для твоего бизнеса'
          text='Снимем крутые видеоролики, нарисуем красивые картинки и напишем запоминающиеся тексты. За тобой будут повторять все конкуренты!'
          position={4}
        />
        </li>

        <li className={`${styles.listElement} ${styles.listElementCenter}`}>
          <WhatWeDoCard
          icon={icon5}
          gif={gif5}
          title='Комплексное продвижение на любой платформе'
          text='Разовьем аккаунт с нуля. Привлечем целевых подписчиков'
          position={5}
        />
        </li>

      </ul>
    </section>
  )
}
