import styles from './MovieList.module.scss'
import Movie from './Movie'
import { useRecoilValue } from 'recoil'
import { MovieState } from 'state/State'
import { Suspense } from 'react'
import DelayedFallback from 'hooks/DelayedFallbak'

const MoiveList = () => {
  const moiveState = useRecoilValue(MovieState)
  console.log(moiveState)

  return (
    <div className={styles.container}>
      <Suspense fallback={<DelayedFallback />}>
        <ul className={styles.movieList}>
          {typeof moiveState === 'string' ? (
            <div>1</div>
          ) : (
            moiveState.map((movie) => <Movie movie={movie} key={`moive-key-${movie.imdbID}`} />)
          )}
        </ul>
      </Suspense>
    </div>
  )
}

export default MoiveList
