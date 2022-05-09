// Serach와 BookMark import
import { SerachIcon, BookMarkNoneIcon } from 'assets/svgs'
import styles from './TabBar.module.scss'

const TabBar = () => {
  return (
    <div className={styles.tabBar}>
      <div className={styles.serachBox}>
        <SerachIcon width='30%' height='30%' />
      </div>
      <div className={styles.tabLine} />
      <div className={styles.bookMarkBox}>
        <BookMarkNoneIcon width='30%' height='30%' />
      </div>
    </div>
  )
}

export default TabBar
