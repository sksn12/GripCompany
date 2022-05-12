import styles from './mainPage.module.scss'
import TabBar from 'components/TabBar/TabBar'
import Header from 'components/Header/Header'
import MovieList from 'components/MoiveList/MovieList'
import { Suspense } from 'react'
import { UseDelayedFallback } from 'hooks/UseDelayedFallback'

const MianPage = () => {
  return (
    <div className={styles.mainPage}>
      <div className={styles.container}>
        <Header />
        <Suspense fallback={<UseDelayedFallback />}>
          <MovieList />
        </Suspense>
      </div>
      <TabBar />
    </div>
  )
}

export default MianPage
