import styles from '../styles/page-styles/index.module.css';

import MainLayout from '../components/main-layout/main-layout';
import { FormPopUp, VideoPopUp } from '../components/pop-ups';
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
  const [ FormPopUpState, setFormPopUpState ] = useState(false);
  const [ VideoPopUpState, setVideoPopUpState ] = useState(false);


  const handleToggleFormPopup = () => {
    setFormPopUpState(!FormPopUpState);
  }

  const handleToggleVideoPopup = () => {
    setVideoPopUpState(!VideoPopUpState);
  }
  
  return (
    <MainLayout>
      <div className={styles.content}>

        <main className={styles.main}>

          <About onPopUpButtonClick={handleToggleFormPopup} />

          <ForWhom onPopUpButtonClick={handleToggleFormPopup} />
          
          <WhatWeDo />
          
          <BadWays onPopUpButtonClick={handleToggleFormPopup}  />
          
          <Team />

          <Cases onVideoClick={handleToggleVideoPopup} />

          <Advantages />

          <FormSection onPopUpButtonClick={handleToggleFormPopup}  />

        </main>

        {FormPopUpState && <FormPopUp popUpHandler={handleToggleFormPopup} />}
        {VideoPopUpState && <VideoPopUp popUpHandler={handleToggleVideoPopup} />}
        
      </div>
    </MainLayout>
  )
}


