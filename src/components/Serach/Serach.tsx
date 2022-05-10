import { ChangeEvent, FormEvent } from 'react'
import { SerachIcon } from 'assets/svgs'
import { useRecoilState } from 'recoil'
import { InputState } from 'state/InputState'
import styles from './Serach.module.scss'
import { InquireSerachData } from 'services/serach'

const Serach = () => {
  const [inputState, setInputState] = useRecoilState(InputState)

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget
    setInputState(value)
  }

  const handleSubmit = (e?: FormEvent<HTMLFormElement>) => {
    e?.preventDefault()

    console.log(inputState)

    const Serachdata = InquireSerachData(inputState, 1)
    Serachdata.then((data) => console.log(data))
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.inputFrom}>
        <button className={styles.bookMarkBox} type='submit'>
          <SerachIcon width='30%' height='30%' />
        </button>
        <input type='text' className={styles.serach} placeholder='Serach' onChange={onChange} value={inputState} />
      </form>
    </div>
  )
}

export default Serach
