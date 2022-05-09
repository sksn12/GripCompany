import styles from './Movie.module.scss'

// 오른쪽에 영화 제목, 연도, 타입이 표시됩니다.
const Movie = () => {
  return (
    <li className={styles.container}>
      <div className={styles.movieImg} />
      <div className={styles.movieInfo}>
        <strong className={styles.movieTitle}>Iron man</strong>
        <p className={styles.movieYear}>1</p>
        <p className={styles.movieType}>2</p>
      </div>
    </li>
  )
}

export default Movie
