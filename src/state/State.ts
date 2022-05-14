import { MovieData } from 'types/project'
import { atom } from 'recoil'

export const InputState = atom<string>({
  key: 'inputstate',
  default: '',
})

// input에 값이 바뀔때마다 movieList가 리랜더링 되는 현상을 막기 위해 inputState분리 (무한스크롤링에서 api 통신을 위한 state)
export const ScrollInputState = atom<string>({
  key: 'scrollinputstate',
  default: '',
})

// data를 받아오거나 에러 메세지를 받아옴
export const MovieState = atom<MovieData[] | string>({
  key: 'moviestate',
  default: '',
})

export const ChoiceBoxState = atom<boolean>({
  key: 'choiceboxstate',
  default: false,
})

export const BookMarkBoxState = atom<boolean>({
  key: 'bookmarkstate',
  default: false,
})

export const BookMarkValueState = atom<MovieData | undefined>({
  key: 'bookmarkvaluestate',
  default: undefined,
})
