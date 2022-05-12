import { SearchIcon, BookMarkNoneIcon } from 'assets/svgs'
import { useSetRecoilState } from 'recoil'
import { MovieState } from 'state/State'
import styles from './TabBar.module.scss'

const store = require('store')

const TabBar = () => {
  const setMovieState = useSetRecoilState(MovieState)

  const onBookMark = () => {
    const data = store.get('data')
    setMovieState(data)
  }

  return (
    <nav className={styles.tabBar}>
      <button className={styles.searchBox} type='button'>
        <SearchIcon width='30%' height='30%' />
      </button>
      <div className={styles.tabLine} />
      <button className={styles.bookMarkBox} onClick={onBookMark} type='button'>
        <BookMarkNoneIcon width='30%' height='30%' />
      </button>
    </nav>
  )
}

export default TabBar
