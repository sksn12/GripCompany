import styles from './MovieList.module.scss'
import Movie from './Movie'
import { useRecoilValue } from 'recoil'
import { ChoiceBoxState, MovieState } from 'state/State'
import ChoiceBox from 'components/ChoiceBox/ChoiceBox'

const MoiveList = () => {
  const movieState = useRecoilValue(MovieState)
  const choiceBoxState = useRecoilValue(ChoiceBoxState)

  return (
    <div className={styles.container}>
      {choiceBoxState && <ChoiceBox />}
      <ul className={styles.movieList}>
        {typeof movieState === 'string' ? (
          <div className={styles.movieStateBox}>
            <p className={styles.movieState}>{movieStateVal(movieState)}</p>
          </div>
        ) : (
          movieState.map((movie) => <Movie movie={movie} key={`moive-key-${movie.imdbID}`} />)
        )}
      </ul>
    </div>
  )
}

export default MoiveList

const ErrorMessageKind = ['Movie not found!', 'Too many results.', 'There are no search results.']

function movieStateVal(movieState: string) {
  switch (movieState) {
    case ErrorMessageKind[0]:
      return ErrorMessageKind[0]
    case ErrorMessageKind[1]:
      return ErrorMessageKind[1]
    case '':
      return ErrorMessageKind[2]
    default:
      return 4
  }
}
