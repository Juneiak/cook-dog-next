import MainLayout from "../components/main-layout/main-layout";
import NotFound from "../components/sections/not-found/not-found";
import styles from "../styles/page-styles/404.module.css";

export default function NotFoundPage() {
  return (
    <MainLayout>
      <main className={styles.main}>
        <NotFound />
      </main>
    </MainLayout>
  )
}