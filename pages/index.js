import styles from '../styles/page-styles/index.module.css';

import MainLayout from '../components/main-layout/main-layout';
import FormPopUp from '../components/pop-ups/form-pop-up/form-pop-up';
import { useState, useEffect } from 'react';

import {
  About,
  BadWays,
  Cases,
  ForWhom,
  Team,
  WhatWeDo,
  Advantages,
  FormSection,
} from '../components/sections/index.js';

export default function Home() {
  const [ popUpState, setPopUpState ] = useState(false);

  const handleTogglePopup = () => {
    setPopUpState(!popUpState);
  }

  useEffect(() => {
    console.log(popUpState)

  }, [popUpState])
  
  return (
    <MainLayout>
      <div className={styles.content}>

        <main className={styles.main}>

          <About onPopUpButtonClick={handleTogglePopup} />

          <ForWhom onPopUpButtonClick={handleTogglePopup} />
          
          <WhatWeDo />
          
          <BadWays onPopUpButtonClick={handleTogglePopup}  />
          
          <Team />

          <Cases />

          <Advantages />

          <FormSection onPopUpButtonClick={handleTogglePopup}  />

        </main>

        {popUpState && <FormPopUp popUpHandler={handleTogglePopup} />}
        
      </div>
    </MainLayout>
  )
}


