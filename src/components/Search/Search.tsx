import { ChangeEvent, FormEvent } from 'react'
import { InquireSearchData } from 'services/search'
import { useRecoilState, useSetRecoilState } from 'recoil'

import { SearchIcon } from 'assets/svgs'
import { InputState, MovieState, ScrollInputState } from 'state/State'
import styles from './Search.module.scss'

const Search = () => {
  const [inputState, setInputState] = useRecoilState(InputState)
  const setScrollInputState = useSetRecoilState(ScrollInputState)
  const setMovieState = useSetRecoilState(MovieState)

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget
    setInputState(value)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setScrollInputState(inputState)

    const Searchdata = InquireSearchData(inputState, 1)
    Searchdata.then((response) => {
      if (response.Response === 'False') return setMovieState(response.Error)
      return setMovieState(response.Search)
    })

    setInputState('')
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.inputFrom}>
        <button className={styles.bookMarkBox} type='submit'>
          <SearchIcon width='30%' height='30%' />
        </button>
        <input type='text' className={styles.search} placeholder='Search' onChange={onChange} value={inputState} />
      </form>
    </div>
  )
}

export default Search
