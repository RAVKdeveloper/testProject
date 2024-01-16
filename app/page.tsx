import HeadBannerHome from '@/components/Home/headBanner'
import styles from './page.module.css'
import NewFilmsHome from '@/components/Home/NewFilms'
import TopFilmsHome from '@/components/Home/topFilms'

export default function Home() {

  return (

    <main className={styles.main}>
        <HeadBannerHome/>
        <NewFilmsHome/>
        <TopFilmsHome/>
    </main>
  )
}
