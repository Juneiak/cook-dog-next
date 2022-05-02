import styles from './slider.module.css';
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import TeamCard from '../team/team-card/team-card'

export default function Slider({ data }) {
  const options = {
    type: 'loop',
    perMove: 1,
    focus: 'center',
    snap: true,
    autoWidth: true,
    gap: '8.4vw',
    pagination: false,
    breakpoints: {
      480: {
        gap: '10vw',
        autoHeight: true
      }
    }
  }
  return (
    <Splide options={options} hasTrack={ false }>
        <div className={`splide__arrows ${styles.arrows}`}>
          <button className={`splide__arrow splide__arrow--prev ${styles.arrow}`}>
            <div className={styles.arrowPrev}></div>
          </button>
          <SplideTrack>
            {data.map((memberData, index) => (
              <SplideSlide key={index}>
                <div className={styles.card}>
                  <TeamCard {...memberData}></TeamCard>
                </div>
              </SplideSlide>
            ))}
          </SplideTrack>
          <button className={`splide__arrow splide__arrow--next ${styles.arrow}`}>
            <div className={styles.arrowNext}></div>
          </button>
      </div>
    </Splide>
  )
}
