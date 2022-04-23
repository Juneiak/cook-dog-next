import styles from '../styles/page-styles/index.module.css';

import MainLayout from '../components/main-layout/main-layout'
import About from '../components/sections/about/about';
import ForWhom from '../components/sections/for-whom/for-whom';
import WhatWeDo from '../components/sections/what-we-do/what-we-do';
import BadWays from '../components/sections/bad-ways/bad-ways';

export default function Home() {

  return (
    <MainLayout>
      <div className={styles.content}>

        <main className="main">

          <About />

          <ForWhom />
          
          <WhatWeDo />
          
          <BadWays />

          <section className="team">

          <div className="team__about">
            <h2 className="team__title">Кстати, знакомься. Вот наши очумелые ручки, глазки и мозги:</h2>
            <span className="team__subtitle">Это только часть команды!</span>
          </div>
          <div className="team__list">
            <div className="slider">
              <ul className="slider__list">
                <li className="slider__list-element">
                  <article className="small-card">
                    <div className="small-card__card-image"></div>
                    <img src="/images/avatars/2.png" alt="аватар" className="small-card__avatar" />
                    <div className="small-card__content">
                      <span className="small-card__member-name">Асия</span>
                      <div className="small-card__about-member">
                        <p className="small-card__power">PROJECT MANAGER</p>
                        <p className="small-card__bonus">+10 к общению к пунктуальности</p>
                      </div>
                    </div>
                  </article>
                </li>
                <li className="slider__list-element">
                  <article className="small-card">
                    <div className="small-card__card-image"></div>
                    <img src="/images/avatars/1.png" alt="аватар" className="small-card__avatar" />
                    <div className="small-card__content">
                      <span className="small-card__member-name">Артем</span>
                      <div className="small-card__about-member">
                        <p className="small-card__power">КРЕАТИВ</p>
                        <p className="small-card__bonus">+10 к сочности контента</p>
                      </div>
                    </div>
                  </article>
                </li>
                <li className="slider__list-element">
                  <article className="small-card">
                    <div className="small-card__card-image"></div>
                    <img src="/images/avatars/3.png" alt="аватар" className="small-card__avatar" />
                    <div className="small-card__content">
                      <span className="small-card__member-name">Варя</span>
                      <div className="small-card__about-member">
                        <p className="small-card__power">МАРКЕТИНГ</p>
                        <p className="small-card__bonus">+10 к продвижению и позицонированию</p>
                      </div>
                    </div>
                  </article>
                </li>
                <li className="slider__list-element">
                  <article className="small-card">
                    <div className="small-card__card-image"></div>
                    <img src="/images/avatars/9.png" alt="аватар" className="small-card__avatar" />
                    <div className="small-card__content">
                      <span className="small-card__member-name">Эльвина</span>
                      <div className="small-card__about-member">
                        <p className="small-card__power">SMM</p>
                        <p className="small-card__bonus">+10 к общению с аудиторией</p>
                      </div>
                    </div>
                  </article>
                </li>
                <li className="slider__list-element">
                  <article className="small-card">
                    <div className="small-card__card-image"></div>
                    <img src="/images/avatars/7.png" alt="аватар" className="small-card__avatar" />
                    <div className="small-card__content">
                      <span className="small-card__member-name">Саша</span>
                      <div className="small-card__about-member">
                        <p className="small-card__power">SMM-стратегия</p>
                        <p className="small-card__bonus">+10 к верным решениям</p>
                      </div>
                    </div>
                  </article>
                </li>
                <li className="slider__list-element">
                  <article className="small-card">
                    <div className="small-card__card-image"></div>
                    <img src="/images/avatars/10.png" alt="аватар" className="small-card__avatar" />
                    <div className="small-card__content">
                      <span className="small-card__member-name">Юля</span>
                      <div className="small-card__about-member">
                        <p className="small-card__power">ДИЗАЙН</p>
                        <p className="small-card__bonus">+10 к трендам в дизайне</p>
                      </div>
                    </div>
                  </article>
                </li>
                <li className="slider__list-element">
                  <article className="small-card">
                    <div className="small-card__card-image"></div>
                    <img src="/images/avatars/4.png" alt="аватар" className="small-card__avatar" />
                    <div className="small-card__content">
                      <span className="small-card__member-name">Ильназ</span>
                      <div className="small-card__about-member">
                        <p className="small-card__power">ТАРГЕТИНГ</p>
                        <p className="small-card__bonus">+100500 к новым клиентам</p>
                      </div>
                    </div>
                  </article>
                </li>
                <li className="slider__list-element">
                  <article className="small-card">
                    <div className="small-card__card-image"></div>
                    <img src="/images/avatars/6.png" alt="аватар" className="small-card__avatar" />
                    <div className="small-card__content">
                      <span className="small-card__member-name">Наташа</span>
                      <div className="small-card__about-member">
                        <p className="small-card__power">ВИДЕО</p>
                        <p className="small-card__bonus">+10 к вовлечению аудитории</p>
                      </div>
                    </div>
                  </article>
                </li>
                <li className="slider__list-element">
                  <article className="small-card">
                    <div className="small-card__card-image"></div>
                    <img src="/images/avatars/5.png" alt="аватар" className="small-card__avatar" />
                    <div className="small-card__content">
                      <span className="small-card__member-name">Ратмир</span>
                      <div className="small-card__about-member">
                        <p className="small-card__power">ТЕКСТА</p>
                        <p className="small-card__bonus">+10 к зачитывнию до дыр</p>
                      </div>
                    </div>
                  </article>
                </li>
              </ul>
            </div>
          </div>
          </section>

          <section className="cases">
            <h2 className="cases__title">Кейсы</h2>
            <ul className="cases__cases-list">
              <li className="cases__list-element">
                <article className="company-card">
                  <div className="company-card__frame"></div>
                  <div className="company-card__content">
                    <img src="/images/companies-logo/1.png" alt="лого компании" className="company-card__image" />
                    <div className="company-card__about">
                      <p className="company-card__name">Автошкола союз</p>
                      <p className="company-card__text">Современный брендинг для советской автошколы</p>
                    </div>
                  </div>
                </article>
              </li>

              <li className="cases__list-element">
                <article className="company-card">
                  <div className="company-card__frame"></div>
                  <div className="company-card__content">
                    <img src="/images/companies-logo/3.png" alt="лого компании" className="company-card__image" />
                    <div className="company-card__about">
                      <p className="company-card__name">Melatika</p>
                      <p className="company-card__text">Премиальный контент для премиальной мебели</p>
                    </div>
                  </div>
                </article>
              </li>

              <li className="cases__list-element">
                <article className="company-card">
                  <div className="company-card__frame"></div>
                  <div className="company-card__content">
                    <img src="/images/companies-logo/2.png" alt="лого компании" className="company-card__image" />
                    <div className="company-card__about">
                      <p className="company-card__name">KROWATSON</p>
                      <p className="company-card__text">Миллионы на мебели через инстаграм</p>
                    </div>
                  </div>
                </article>
              </li>
            </ul>
          </section>

          <section className="advantages">
            <h2 className="advatages__title">Уже не терпится с нами поработать?</h2>
            <ul className="advantages__cards-list">
              <li className="advantages__list-element">
                <article className="middle-card">
                  <div className="middle-card__shadow"></div>
                  <div className="middle-card__header">
                    <h3 className="middle-card__card-name">LAUNCH</h3>
                    <img src="/images/icons/icon12.png" alt="иконка ракеты" className="middle-card__name-logo" />
                  </div>
                  <ul className="middle-card__list">
                    <li className="middle-card__list-element">– Разработка глобальной стратегии бренда;</li>
                    <li className="middle-card__list-element">– Создание уникального фирменного стиля;</li>
                    <li className="middle-card__list-element">– Генерация стартового контента;</li>
                    <li className="middle-card__list-element">– Организация платформы для посадки клиентов;</li>
                    <li className="middle-card__list-element">– Привлечение первых клиентов;</li>
                    <li className="middle-card__list-element">– Создание руководства по дальнейшему развитию.</li>
                  </ul>
                  <div className="middle-card__price-container"><span>ОТ 300.000 РУБ</span></div>
                </article>
              </li>

              <li className="advantages__list-element">
                <article className="middle-card">
                  <div className="middle-card__shadow"></div>
                  <div className="middle-card__header">
                    <h3 className="middle-card__card-name">ПОДДЕРЖКА</h3>
                    <img src="/images/icons/icon13.png" alt="иконка ракеты" className="middle-card__name-logo" />
                  </div>
                  <ul className="middle-card__list">
                    <li className="middle-card__list-element">– Поддержание или запуск конкретного направления (Tik-Tok, Instagram и т.д.);</li>
                    <li className="middle-card__list-element">– Разработка стратегии продвижения;</li>
                    <li className="middle-card__list-element">– Составление контент-плана;</li>
                    <li className="middle-card__list-element">– Генерация уникального контента;</li>
                    <li className="middle-card__list-element">– Привлечение новых клиентов на выбранную платформу.</li>
                  </ul>
                  <div className="middle-card__price-container"><span>ОТ 50.000 РУБ</span></div>
                </article>
              </li>

              <li className="advantages__list-element">
                <article className="middle-card">
                  <div className="middle-card__shadow"></div>
                  <div className="middle-card__header">
                    <h3 className="middle-card__card-name">БРЕНДИНГ</h3>
                    <img src="/images/icons/icon14.png" alt="иконка ракеты" className="middle-card__name-logo" />
                  </div>
                  <ul className="middle-card__list">
                    <li className="middle-card__list-element">– Определение глобальной миссии компании;</li>
                    <li className="middle-card__list-element">– Создание уникального фирменного стиля;</li>
                    <li className="middle-card__list-element">– Цветовая палитра;</li>
                    <li className="middle-card__list-element">– Подбор шрифтов;</li>
                    <li className="middle-card__list-element">– Привлечение первых клиентов;</li>
                    <li className="middle-card__list-element">– Создание руководства по использованию фирменного стиля.</li>
                    <li className="middle-card__list-element">– Создание логотипа</li>

                  </ul>
                  <div className="middle-card__price-container"><span>ОТ 70.000 РУБ</span></div>
                </article>
              </li>
            </ul>
          </section>

          <section className="form-section">
            <form className="form">
              <div className="form__shadow"></div>
              <div className="form__container">
                <h2 className="form__title">Хочешь расти? Запишись к нам на консультацию!</h2>
                <div className="form__inputs-container">
                  <input
                    type="text"
                    placeholder="Ваше имя"
                    required className="form__input"
                  />
                  <input
                  type="text"
                  placeholder="Название компании"
                  className="form__input"
                  />
                  <input
                  type="tel"
                  minLength="10"
                  maxLength="20"
                  required
                  placeholder="+7 (999) 999-99-99"
                  className="form__input"
                  />
                </div>
                <button type="button" name="leave-contact" className="button form__button">Записаться</button>
              </div>
            </form>
            <div className="form-section__button-container">
              <h2 className="form-section__title">Хочешь расти? Запишись к нам на консультацию!</h2>
              <button type="button" name="leave-contact" className="button">Записаться</button>
            </div>
          </section>

        </main>

        <div id="pop-up" className="pop-up">
          <button type="button" id="pop-up-close-button" className="pop-up_close-button"></button>
          <div className="pop-up__content">
            <section className="form-pop-up">
              <form  className="form-pop-up__form">
                <h3 className="form-pop-up__title">Оставь заявку, мы с тобой свяжемся</h3>
                <fieldset className="form-pop-up__inputs-container">
                  <label className="form-pop-up__input-tag">
                    Имя
                    <input
                      className="form-pop-up__input"
                      type="text"
                      placeholder="Имя"
                      minLength="2"
                      maxLength="30"
                    />
                  </label>
                  <label className="form-pop-up__input-tag">
                    Компания
                    <input
                      className="form-pop-up__input"
                      type="text"
                      placeholder="Название компании"
                      minLength="2"
                      maxLength="50"
                    />
                  </label>
                  <label className="form-pop-up__input-tag">
                    Телефон
                    <input
                      className="form-pop-up__input"
                      type="text"
                      placeholder="+7 (999) 999-99-99"
                      minLength="2"
                      maxLength="30"
                    />
                  </label>
                </fieldset>
                <button type="button" className="button form-pop-up__button">Отправить</button>
              </form>
            </section>
          </div>
        </div>
        
      </div>
    </MainLayout>
  )
}


