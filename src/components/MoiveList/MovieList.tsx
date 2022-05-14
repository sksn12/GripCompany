import styles from './MovieList.module.scss'
import Movie from './Movie'
import ChoiceBox from 'components/ChoiceBox/ChoiceBox'
import Loading from 'components/Loading/Loading'

import { useRecoilState, useRecoilValue } from 'recoil'
import { ChoiceBoxState, MovieState, ScrollInputState } from 'state/State'
import { useEffect, useRef, useCallback, memo, useState } from 'react'
import { InquireSearchData } from 'services/search'

let page = 1

const MoiveList = () => {
  const [movieState, setMovieState] = useRecoilState(MovieState)
  const choiceBoxState = useRecoilValue(ChoiceBoxState)
  const scrollInputState = useRecoilValue(ScrollInputState)

  const [isLoaded, setIsLoaded] = useState(false)

  const observerRef = useRef<IntersectionObserver>()
  const boxRef = useRef<HTMLDivElement>(null)

  console.log(page)
  const getMoive = useCallback(() => {
    setIsLoaded(true)
    const Searchdata = InquireSearchData(scrollInputState, (page += 1))
    Searchdata.then((response) => {
      if (response.Response === 'False') return setMovieState(response.Error)
      return setMovieState((prev) => prev.concat(response.Search))
    })
    setIsLoaded(false)
  }, [setMovieState, scrollInputState])

  // IntersectionObserver 설정
  const intersectionObserver = useCallback(
    (entries: IntersectionObserverEntry[], io: IntersectionObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // 관찰하고 있는 entry가 화면에 보여지는 경우
          io.unobserve(entry.target) // entry 관찰 해제
          getMoive()
        }
      })
    },
    [getMoive]
  )

  // moiveState
  useEffect(() => {
    observerRef.current = new IntersectionObserver(intersectionObserver)
    boxRef.current && observerRef.current.observe(boxRef.current)
  }, [intersectionObserver])

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
      {isLoaded && <Loading />}
      <div className={styles.targetElement} ref={boxRef} />
    </div>
  )
}

export default memo(MoiveList)

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
      return ErrorMessageKind[2]
  }
}
