import { atom } from 'recoil'

export const InputState = atom<string | undefined>({
  key: 'inputstate',
  default: '',
})
