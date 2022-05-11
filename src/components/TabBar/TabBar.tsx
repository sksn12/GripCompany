import { SearchIcon, BookMarkNoneIcon } from 'assets/svgs'
import styles from './TabBar.module.scss'

const TabBar = () => {
  return (
    <nav className={styles.tabBar}>
      <div className={styles.searchBox}>
        <SearchIcon width='30%' height='30%' />
      </div>
      <div className={styles.tabLine} />
      <div className={styles.bookMarkBox}>
        <BookMarkNoneIcon width='30%' height='30%' />
      </div>
    </nav>
  )
}

export default TabBar
