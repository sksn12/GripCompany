import { SearchIcon, BookMarkNoneIcon } from 'assets/svgs'
import { useSetRecoilState } from 'recoil'
import { MovieState, ScrollInputState } from 'state/State'
import styles from './TabBar.module.scss'

const store = require('store')

const TabBar = () => {
  const setMovieState = useSetRecoilState(MovieState)
  const setScrollInputState = useSetRecoilState(ScrollInputState)

  const onBookMark = () => {
    const data = store.get('data')
    if (data) setMovieState(data)
  }

  const onSerach = () => {
    setScrollInputState('')
    setMovieState('')
  }

  return (
    <nav className={styles.tabBar}>
      <button className={styles.searchBox} type='button' onClick={onSerach}>
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
