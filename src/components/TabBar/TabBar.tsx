// Serach와 BookMark import
import styles from './TabBar.module.scss'

const TabBar = () => {
  return (
    <div className={styles.tabBar}>
      <div className={styles.serachBox} />
      <div className={styles.bookMarkBox} />
    </div>
  )
}

export default TabBar
