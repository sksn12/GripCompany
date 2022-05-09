import { SerachIcon } from 'assets/svgs'
import styles from './Serach.module.scss'

const Serach = () => {
  return (
    <div className={styles.container}>
      <div className={styles.bookMarkBox}>
        <SerachIcon width='30%' height='30%' />
      </div>
      <input type='text' className={styles.serach} placeholder='Serach' />
    </div>
  )
}

export default Serach
