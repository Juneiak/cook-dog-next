import SliderV from "../components/slider-v";
import { useRef, useEffect, useState } from "react";

export default function Home() {

  const sliderContainer = useRef()
  console.log(sliderContainer.current)
  return (
    <div className="page">
      {sliderContainer.current && <SliderV ref={state} />}
      <div className="content">

        <main className="main">

          <section className="about">
            <div className="about__company-name">
              <h1 className="about__title">CookDog</h1>
              <span className="about__subtitle">Собака. Повар. Агентство.</span>
              <button name="leave-contact" type="button" className="button">Начать</button>
            </div>
            
            <div className="about__container">
              <h2 className="about__about-title">Кто мы такие?</h2>
              <div className='about__text-container'>
                <p className="about__text about__text_width_320">Мы - маркетинговое агентство Cookdog. Готовим сочный контент и прогреваем ваши продажи. В нашей команде 12 экспертов, которые знают и любят свое дело. Маркетологи, продукт-менеджеры, видеографы, копирайтеры, дизайнеры, smm-менеджеры, таргетологи, директологи, программисты.</p>
                <p className="about__text">Мы - маркетинговое агентство Cookdog.</p>
                <p className="about__text">Готовим сочный контент и прогреваем ваши продажи.</p>
                <p className="about__text">В нашей команде 12 экспертов, которые знают и любят свое дело.</p>
                <p className="about__text">Маркетологи, продукт-менеджеры, видеографы, копирайтеры, дизайнеры, smm-менеджеры, таргетологи, директологи, программисты.</p>
              </div>
              <p className="about__subtext">Мы умеем делать из обычного бизнеса офигенный.</p>
            </div>
          </section>

          <section className="for-whom">
            <h2 className="for-whom__title">Если у тебя:</h2>
            <ul className="for-whom__list">
      
              <l1 className="for-whom__list-element">
                <article className="for-whom__card">
                  <div className="framed-icon">
                    <img src="/images/icons/icon1.png" alt="иконка домик" className="framed-icon__icon"></img>
                  </div>
                  <div className="card-about">
                    <h3 className="card-about__title">Маленький бизнес</h3>
                    <p className="card-about__text">Ты только начал и мечтаешь выйти на уровень "Apple".</p>
                  </div>
                </article>
              </l1>

              <l1 className="for-whom__list-element">
                <article className="for-whom__card">
                  <div className="framed-icon">
                    <img src="/images/icons/icon2.png" alt="иконка бизнес центр" className="framed-icon__icon"></img>
                  </div>
                  <div className="card-about">
                    <h3 className="card-about__title">Средний бизнес</h3>
                    <p className="card-about__text">Свой бизнес поставлен на поток, ты в поиске решений по дальнейшему развитию бренда.</p>
                  </div>
                </article>
              </l1>

              <l1 className="for-whom__list-element">
                <article className="for-whom__card">
                  <div className="framed-icon">
                    <img src="/images/icons/icon3.png" alt="иконка завод" className="framed-icon__icon"></img>
                  </div>
                  <div className="card-about">
                    <h3 className="card-about__title">Собственное производство</h3>
                    <p className="card-about__text">Ты хочешь заявить о себе и выйти на мировой уровень.</p>
                  </div>
                </article>
              </l1>
      
            </ul>
            <div className="for-whom__button">
              <button name="leave-contact" type="button" className="button">Пора к нам!</button>
            </div>
          </section>

          <section className="what-we-do">
            <h2 className="what-we-do__title">Что мы сделаем:</h2>
            <ul className="what-we-do__list">
              <li className="what-we-do__list-element">
                <article className="what-we-do__card">
                  <div className="framed-icon">
                    <img src="/images/icons/icon4.png" alt="иконка завод" className="framed-icon__icon"></img>
                  </div>
                  <div className="card-about card-about_align_start">
                    <h3 className="card-about__title">Проведем комплексный анализ</h3>
                    <p className="card-about__text">Найдем твою целевую аудиторию и самых опасных конкурентов</p>
                  </div>
                </article>
              </li>

              <li className="what-we-do__list-element">
                <article className="what-we-do__card">
                  <div className="framed-icon">
                    <img src="/images/icons/icon5.png" alt="иконка завод" className="framed-icon__icon"></img>
                  </div>
                  <div className="card-about card-about_align_start">
                    <h3 className="card-about__title">Настроим таргет и контекст</h3>
                    <p className="card-about__text">Не пальцем в небо, а четко в твою ЦА. Привлечем клиентов по минимальной цене</p>
                  </div>
                </article>
              </li>

              <li className="what-we-do__list-element">
                <article className="what-we-do__card">
                  <div className="framed-icon">
                    <img src="/images/icons/icon6.png" alt="иконка завод" className="framed-icon__icon"></img>
                  </div>
                  <div className="card-about card-about_align_start">
                    <h3 className="card-about__title">Создадим персональную стратегию</h3>
                    <p className="card-about__text">Проведем анализ ниши и продукта. Подготовим план для успешного запуска. Ты будешь расти своим собственным путем</p>
                  </div>
                </article>
              </li>

              <li className="what-we-do__list-element">
                <article className="what-we-do__card">
                  <div className="framed-icon">
                    <img src="/images/icons/icon7.png" alt="иконка завод" className="framed-icon__icon"></img>
                  </div>
                  <div className="card-about card-about_align_start">
                    <h3 className="card-about__title">Подготовим контент для твоего бизнеса</h3>
                    <p className="card-about__text">Снимем крутые видеоролики, нарисуем красивые картинки и напишем запоминающиеся тексты. За тобой будут повторять все конкуренты!</p>
                  </div>
                </article>
              </li>

              <li className="what-we-do__list-element what-we-do__list-element_position_center">
                <article className="what-we-do__card">
                  <div className="framed-icon">
                  <img src="/images/icons/icon8.png" alt="иконка лайка" className="framed-icon__icon"></img>
                  </div>
                  <div className="card-about card-about_align_start">
                    <h3 className="card-about__title">Комплексное продвижение на любой платформе</h3>
                    <p className="card-about__text">Разовьем аккаунт с нуля. Привлечем целевых подписчиков</p>
                  </div>
                </article>
              </li>

            </ul>
          </section>

          <section className="bad-ways">
            <div className="bad-ways__about">
              <h2 className="bad-ways__title">Твоя личная команда маркетинга на удаленке</h2>
              <span className="bad-ways__subtitle">Давай разберем как обычно делают бизнесмены и почему так делать не стоит:</span>
            </div>
            <ul className="bad-ways__card-list">
              <li className="bad-ways__list-element">
                <article className="big-card">
                  <div className="big-card__shadow"></div>
                  <div className="big-card__content">
                    <h3 className="big-card__title">НОБРАТЬ ОТДЕЛ МАРКЕТИНГА В ШТАТ</h3>
                    <img src="/images/icons/icon9.png" alt="иконка спецов" className="big-card__icon" />
                    <ul className="big-card__cons-list">
                      <li className="big-card__con">
                        <p className="big-card__con-text">Спецы стоят очень дорого</p>
                        <ul className="big-card__con-subtext-list">
                          <li>
                            <p className="big-card__con-subtext">– Их очень мало</p>
                          </li>
                          <li>
                            <p className="big-card__con-subtext">– Нужен большой штат (дизайнеры,копирайтеры,СММ и пр.)</p>
                          </li>
                        </ul>
                      </li>
    
                      <li className="big-card__con">
                        <p className="big-card__con-text">Вряд-ли ты знаешь что хорошо, а что плохо и умеешь руководить творческим коллективом</p>
                      </li>
    
                      <li className="big-card__con">
                        <p className="big-card__con-text">Куча затрат на:</p>
                        <ul className="big-card__con-subtext-list">
                          <li>
                            <p className="big-card__con-subtext">– Дорогое профессиональное оборудование (камеры,свет и тд.)</p>
                          </li>
                          <li>
                            <p className="big-card__con-subtext">– Аренда офиса</p>
                          </li>
                          <li>
                            <p className="big-card__con-subtext">– Покупка компьютерной техники</p>
                          </li>
                        </ul>
                      </li>
                    </ul>
    
                    <p className="big-card__total">Итог: Много затрат, нервов и результат только через полгода.</p>
                  </div>
                </article>
              </li>

              <li className="bad-ways__list-element">
                <article className="big-card">
                  <div className="big-card__shadow"></div>
                  <div className="big-card__content">
                    <h3 className="big-card__title">ВЕСТИ МАРКЕТИНГ САМОМУ ИЛИ ПОПРОСИТЬ ЖЕНУ/ПОДРГУ</h3>
                    <img src="/images/icons/icon10.png" alt="иконка спецов" className="big-card__icon" />
                    <ul className="big-card__cons-list">
                      <li className="big-card__con">
                        <p className="big-card__con-text">Привет, расфокус внимания</p>
                        <ul className="big-card__con-subtext-list">
                          <li>
                            <p className="big-card__con-subtext">– Нужно придумать стратегию</p>
                          </li>
                          <li>
                            <p className="big-card__con-subtext">– – Арендовать студию</p>
                          </li>
                          <li>
                            <p className="big-card__con-subtext">– Оплатить счета</p>
                          </li>
                          <li>
                            <p className="big-card__con-subtext">– Обработать контент</p>
                          </li>
                          <li>
                            <p className="big-card__con-subtext">– Написать и выложить пост</p>
                          </li>
                        </ul>
                      </li>
    
                      <li className="big-card__con">
                        <p className="big-card__con-text">Весь маркетинг завязан на одном человеке</p>
                        <ul className="big-card__con-subtext-list">
                          <li>
                            <p className="big-card__con-subtext">– Вдруг не хватит времени на все?</p>
                          </li>
                          <li>
                            <p className="big-card__con-subtext">– Нет желания</p>
                          </li>
                          <li>
                            <p className="big-card__con-subtext">– Непрофессиональный контент</p>
                          </li>
                          <li>
                            <p className="big-card__con-subtext">– Не видишь свой продукт со стороны</p>
                          </li>
                        </ul>
                      </li>
                    </ul>

                    <p className="big-card__total">Итог: Контент на авось, эмоциональное выгорание, ссоры с женой\подругой и 0 результата.</p>
                  </div>
                </article>
              </li>

              <li className="bad-ways__list-element">
                <article className="big-card">
                  <div className="big-card__shadow"></div>
                  <div className="big-card__content">
                    <h3 className="big-card__title">НАЙТИ ТОЛПУ ФРИЛАНСЕРОВ НА КАЖДОЕ ЗАНЯТИЕ</h3>
                    <img src="/images/icons/icon11.png" alt="иконка спецов" className="big-card__icon" />
                    <ul className="big-card__cons-list">
                      <li className="big-card__con">
                        <p className="big-card__con-text">Сложно найти общий язык</p>
                        <ul className="big-card__con-subtext-list">
                          <li>
                            <p className="big-card__con-subtext">– Увы, но иногда кидают на деньги и нарушают сроки </p>
                          </li>
                          <li>
                            <p className="big-card__con-subtext">– Не выходят на связь</p>
                          </li>
                        </ul>
                      </li>

                      <li className="big-card__con">
                        <p className="big-card__con-text">Нет слаженной командной работы</p>
                        <ul className="big-card__con-subtext-list">
                          <li>
                            <p className="big-card__con-subtext">–...и общего понимания стратегии</p>
                          </li>
                          <li>
                            <p className="big-card__con-subtext">– Не несут ответственности за результат</p>
                          </li>
                        </ul>
                      </li>

                      <li className="big-card__con">
                        <p className="big-card__con-text">Используют непонятное оборудование</p>
                      </li>

                      <li className="big-card__con">
                        <p className="big-card__con-text">Называют неоправданные цены</p>
                      </li>
                    </ul>

                    <p className="big-card__total">Итог: У бренда есть более-менее контент,но он не вызывает доверия. Цена - ваши седые волосы.</p>
                  </div>
                </article>
              </li>
            </ul>

            <div className="bad-ways__button">
              <button name="leave-contact" type="button" className="button">Расслабиться</button>
            </div>
          </section>

          <section className="team">

          <div className="team__about">
            <h2 className="team__title">Кстати, знакомься. Вот наши очумелые ручки, глазки и мозги:</h2>
            <span className="team__subtitle">Это только часть команды!</span>
          </div>
          <div className="team__list">
            <div ref={sliderContainer} className="slider">
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

        <footer className="footer">
          <div className="footer__content">
            <span className="footer__author">CookDog Agency Design</span>
            <span className="footer__number">+ 7 937 944 99 15</span>
            <ul className="footer__contacts__list">
              <li className="footer__contact-list-element">
                <a href="https://vk.com/cookdog" target="blank" className="footer__link">
                  <img src="/images/vk-icon.svg" alt="иконка вк" className="footer__link-icon" />
                </a>
              </li>
            </ul>
          </div>
        </footer>

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
    </div>
  )
}


