import styles from '../styles/page-styles/home.module.css';

import MainLayout from '../components/main-layout/main-layout';
import { FormPopUp, VideoPopUp } from '../components/pop-ups';
import { useState } from 'react';

import {
  About,
  BadWays,
  Cases,
  ForWhom,
  Team,
  WhatWeDo,
  Advantages,
  FormSection,
} from '../components/sections/home-page';

export default function HomePage() {
  const [ formPopUpState, setFormPopUpState ] = useState(false);
  const [ videoPopUpState, setVideoPopUpState ] = useState(false);
  const [ popUpVideoUrl, setPopUpVideoUrl ] = useState('');

  const handleToggleFormPopup = () => {
    setFormPopUpState(!formPopUpState);
  }

  const handleOpenVideoPopUp = (videoUrl) => {
    setVideoPopUpState(true);
    setPopUpVideoUrl(videoUrl)
  }

  const handleCloseVideoPopUp = () => {
    setVideoPopUpState(false);
    setPopUpVideoUrl('')
  }
  
  return (
    <MainLayout>
      <div className={styles.pageContent}>

        <main className={styles.main}>

          <About onPopUpButtonClick={handleToggleFormPopup} />

          <ForWhom onPopUpButtonClick={handleToggleFormPopup} />
          
          <WhatWeDo />
          
          <BadWays onPopUpButtonClick={handleToggleFormPopup}  />
          
          <Team />

          <Cases openVideoPopUpHandler={handleOpenVideoPopUp} />

          <Advantages onPopUpButtonClick={handleToggleFormPopup}  />

          <FormSection onPopUpButtonClick={handleToggleFormPopup}  />

        </main>

        {formPopUpState && <FormPopUp popUpHandler={handleToggleFormPopup} />}
        {videoPopUpState && <VideoPopUp closeHandler={handleCloseVideoPopUp} videoUrl={popUpVideoUrl} />}
        
      </div>
    </MainLayout>
  )
}


