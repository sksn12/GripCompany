import { BookMarkIcon, BookMarkNoneIcon } from 'assets/svgs'
import { useState, useCallback } from 'react'
import styles from './BookMark.module.scss'
import { Props } from 'components/MoiveList/Movie'

const store = require('store')

const BookMark = ({ movie }: Props) => {
  const [bookMarkState, setBookMarkState] = useState(false)

  const onClick = useCallback(() => {
    // 즐겨찾기가 되어 있으면
    const data = store.get('data')
    if (!data) store.set('data', [movie])
    else {
      const newData = [...data, movie]
      store.remove('data')
      store.set('data', newData)
    }

    setBookMarkState((prev) => !prev)
  }, [])

  return (
    <button className={styles.bookMark} onClick={onClick} type='button'>
      {bookMarkState ? <BookMarkIcon /> : <BookMarkNoneIcon />}
    </button>
  )
}

export default BookMark
