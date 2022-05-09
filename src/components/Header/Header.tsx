import Serach from 'components/Serach/Serach'
import styles from './Header.module.scss'
import Profile from 'components/Profile/Profile'

const Header = () => {
  return (
    <header className={styles.header}>
      <Profile />
      <Serach />
    </header>
  )
}

export default Header
