import { BookMarkIcon } from 'assets/svgs'
import styles from './Movie.module.scss'

// 오른쪽에 영화 제목, 연도, 타입이 표시됩니다.
const Movie = () => {
  return (
    <li className={styles.container}>
      <div className={styles.movieImg} />
      <div className={styles.movieInfo}>
        <strong className={styles.movieTitle}>Iron man</strong>
        <p className={styles.movieYear}>년도</p>
        <p className={styles.movieType}>타입</p>
      </div>
      <div className={styles.bookMarkBox}>
        <BookMarkIcon />
      </div>
    </li>
  )
}

export default Movie
