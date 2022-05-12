import { BookMarkIcon, BookMarkNoneIcon } from 'assets/svgs'
import { useRecoilValue } from 'recoil'
import { BookMarkBoxState } from 'state/State'
import styles from './BookMark.module.scss'

const BookMark = () => {
  const bookMarkboxState = useRecoilValue(BookMarkBoxState)

  return <div className={styles.bookMark}>{bookMarkboxState ? <BookMarkIcon /> : <BookMarkNoneIcon />}</div>
}

export default BookMark
