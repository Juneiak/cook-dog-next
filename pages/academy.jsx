import styles from '../styles/page-styles/academy.module.css';
import MainLayout from '../components/main-layout/main-layout';
import {
  DigitalFuture,
  CallToAction,
  WeWillSupport,
  Knowledge,
  EasyStart,
} from '../components/sections/academy-page';

export default function AcademyPage() {

  return (
    <MainLayout>
      <div className={styles.pageContent}>
        <main className={styles.main}>
          <DigitalFuture />
          <CallToAction />
          <WeWillSupport />
          <Knowledge />
          <EasyStart />
        </main>
      </div>
    </MainLayout>
  )
}


