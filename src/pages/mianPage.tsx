import styles from './mainPage.module.scss'
import TabBar from 'components/TabBar/TabBar'
import Header from 'components/Header/Header'
import MovieList from 'components/MoiveList/MoiveList'

const MianPage = () => {
  return (
    <div className={styles.mainPage}>
      <div className={styles.container}>
        <Header />
        <MovieList />
      </div>
      <TabBar />
    </div>
  )
}

export default MianPage
