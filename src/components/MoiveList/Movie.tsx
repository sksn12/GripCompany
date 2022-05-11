import { BookMarkNoneIcon } from 'assets/svgs'
import styles from './Movie.module.scss'
import { MovieData } from 'types/project.d'
import defaultImg from '../../assets/image/default.png'

interface Props {
  movie: MovieData
}

const Movie = ({ movie }: Props) => {
  let PosternullCheck = movie.Poster

  if (PosternullCheck === 'N/A') PosternullCheck = defaultImg

  return (
    <li className={styles.container}>
      <img className={styles.movieImg} src={PosternullCheck} alt='img' />
      <div className={styles.movieInfo}>
        <strong className={styles.movieTitle}>Title : {movie.Title}</strong>
        <dd className={styles.movieYear}>Year : {movie.Year}</dd>
        <dd className={styles.movieType}>Type : {movie.Type}</dd>
      </div>
      <div className={styles.bookMarkBox}>
        <BookMarkNoneIcon />
      </div>
    </li>
  )
}

export default Movie
