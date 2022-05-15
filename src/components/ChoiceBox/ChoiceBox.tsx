import { memo, useCallback } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { BookMarkBoxState, BookMarkValueState, ChoiceBoxState } from 'state/State'
import styles from './ChoiceBox.module.scss'

const store = require('store')

const ChoiceBox = () => {
  const setChoiceBoxState = useSetRecoilState(ChoiceBoxState)
  const setBookMarkBoxState = useSetRecoilState(BookMarkBoxState)
  const bookMarkValueState = useRecoilValue(BookMarkValueState)

  const onCancel = useCallback(() => {
    setChoiceBoxState((prev) => !prev)
  }, [setChoiceBoxState])

  const onBookMark = useCallback(() => {
    const data = store.get('data')
    if (!data) store.set('data', [bookMarkValueState])
    else {
      const newData = [...data, bookMarkValueState]
      store.remove('data')
      store.set('data', newData)
    }

    setBookMarkBoxState((prev) => !prev)
    onCancel()
  }, [bookMarkValueState, setBookMarkBoxState, onCancel])

  return (
    <div className={styles.container}>
      <div className={styles.choiceBox}>
        <button className={styles.bookmarkBtn} type='button' onClick={onBookMark}>
          즐겨찾기
        </button>
        <button className={styles.cancelBtn} type='button' onClick={onCancel}>
          취소
        </button>
      </div>
    </div>
  )
}

export default memo(ChoiceBox)
