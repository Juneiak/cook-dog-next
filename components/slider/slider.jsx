import styles from './slider.module.css';
import TeamCard from '../sections/team/team-card/team-card'
import { useRef, useEffect, useState, useCallback } from 'react';


export default function Slider({ data }) {
  const listRef = useRef(null);
  const [listStates, setListStates] = useState({})

  let centerElement
  const selectCenteredElement = useCallback(() => {
    const { elementsPositions, listCenter, list, rightOffset, leftOffset, rightOffsetTo, leftOffsetTo, listElements, elemntsWidth } = listStates
    let listOffset = list.scrollLeft;
    const center = listCenter + listOffset
    if (listOffset > (rightOffset - 1)) list.scrollLeft = rightOffsetTo;
    if (listOffset < (leftOffset + 1)) list.scrollLeft = leftOffsetTo;
    elementsPositions.find((el, index) => {
      if (center > el && center < (el + elemntsWidth)) setCenterElement(listElements[index])
    })
  }, [listStates])

  function setCenterElement(el) {
    if (el.isEqualNode(centerElement)) return
    if (centerElement) deactivate(centerElement);
    activate(el);
    centerElement = el
  }

  function activate(el) {
    if (!el.classList.contains('elementIsActive')) el.classList.add('elementIsActive');
  }

  function deactivate(el) {
    if (el.classList.contains('elementIsActive')) el.classList.remove('elementIsActive');
  }

  useEffect(() => {
    if (listRef.current && !listStates.list) {
      const list = listRef.current
      const listElements = Array.from(list.querySelectorAll('#teamMemberCard'));
      const elemntsWidth = listElements[0].offsetWidth;
      const listWidth = list.clientWidth;
      const listCenter = listWidth / 2;
      list.scrollLeft = listElements[3].offsetLeft - listCenter + (elemntsWidth / 2);
      centerElement = listElements[3]
      activate(centerElement)
      const elementsPositions = listElements.map(el => el.offsetLeft);
      const leftOffset =  elementsPositions[0]
      const leftOffsetTo = elementsPositions[listElements.length - 3];
      const rightOffset = elementsPositions[listElements.length - 1] - listWidth + elemntsWidth;
      const rightOffsetTo = elementsPositions[2] - listWidth + elemntsWidth;
      console.log()
      setListStates({
        list,
        elemntsWidth,
        listWidth,
        listCenter,
        listElements,
        elementsPositions,
        leftOffset,
        leftOffsetTo,
        rightOffset,
        rightOffsetTo,
      })
    }
    if (listStates.list) listStates.list.addEventListener('scroll', selectCenteredElement)

    return () => {
      if (listStates.list) listStates.list.removeEventListener('scroll', selectCenteredElement);
  }

  }, [listRef.current])

  return (
    <div className={styles.slider}>
      <ul ref={listRef} className={styles.list}>
        {data.map((memberData, index) => (
          <li id='teamMemberCard' key={index} className={styles.listElement}>
            <TeamCard {...memberData}></TeamCard>
          </li>
        ))}
      </ul>
    </div>
  )
}
