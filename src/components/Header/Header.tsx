import Search from 'components/Search/Search'
import styles from './Header.module.scss'
import Profile from 'components/Profile/Profile'

const Header = () => {
  return (
    <header className={styles.header}>
      <Profile />
      <Search />
    </header>
  )
}

export default Header
