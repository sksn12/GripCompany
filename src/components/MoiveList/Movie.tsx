import styles from './Movie.module.scss'
import { MovieData } from 'types/project.d'
import defaultImg from '../../assets/image/default.png'
import { BookMarkIcon, BookMarkNoneIcon } from 'assets/svgs'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { BookMarkBoxState, BookMarkValueState, ChoiceBoxState } from 'state/State'
import { memo } from 'react'

export interface Props {
  movie: MovieData
}

const Movie = ({ movie }: Props) => {
  const setChocieBoxState = useSetRecoilState(ChoiceBoxState)
  const setBookMarkValueState = useSetRecoilState(BookMarkValueState)
  const bookMarkboxState = useRecoilValue(BookMarkBoxState)

  let PosternullCheck = movie.Poster

  if (PosternullCheck === 'N/A') PosternullCheck = defaultImg

  const onClick = () => {
    setChocieBoxState((prev) => !prev)
    setBookMarkValueState(movie)
  }

  return (
    <button className={styles.container} onClick={onClick} type='button'>
      <img className={styles.movieImg} src={PosternullCheck} alt='img' />
      <div className={styles.movieInfo}>
        <strong className={styles.movieTitle}>Title : {movie.Title}</strong>
        <dd className={styles.movieYear}>Year : {movie.Year}</dd>
        <dd className={styles.movieType}>Type : {movie.Type}</dd>
      </div>
      <div className={styles.bookMarkBox}>
        <div className={styles.bookMark}>{bookMarkboxState ? <BookMarkIcon /> : <BookMarkNoneIcon />}</div>
      </div>
    </button>
  )
}

export default memo(Movie)
