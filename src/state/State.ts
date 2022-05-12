import { MovieData } from 'types/project'
import { atom } from 'recoil'

export const InputState = atom<string>({
  key: 'inputstate',
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
