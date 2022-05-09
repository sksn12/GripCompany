import styles from './MovieList.module.scss'
import Movie from './Movie'

const MoiveList = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.movieList}>
        <Movie />
        <Movie />
        <Movie />
      </ul>
    </div>
  )
}

export default MoiveList
