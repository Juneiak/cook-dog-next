import styles from '../styles/page-styles/index.module.css';

import MainLayout from '../components/main-layout/main-layout';
import FormPopUp from '../components/pop-ups/form-pop-up/form-pop-up';

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

  return (
    <MainLayout>
      <div className={styles.content}>

        <main className={styles.main}>

          <About />

          <ForWhom />
          
          <WhatWeDo />
          
          <BadWays />
          
          <Team />

          <Cases />

          <Advantages />

          <FormSection />

        </main>

        <FormPopUp />
        
      </div>
    </MainLayout>
  )
}


