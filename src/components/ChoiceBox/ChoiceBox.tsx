// BookMark import && 취소버튼 만들어 사용
import { memo } from 'react'
import { useSetRecoilState } from 'recoil'
import { ChoiceBoxState } from 'state/State'
import styles from './ChoiceBox.module.scss'

const ChoiceBox = () => {
  const setChoiceBoxState = useSetRecoilState(ChoiceBoxState)

  const onCancel = () => {
    setChoiceBoxState((prev) => !prev)
  }

  return (
    <div className={styles.container}>
      <div className={styles.choiceBox}>
        <button className={styles.bookmarkBtn} type='button'>
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
