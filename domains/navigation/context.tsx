import { createContext, type Dispatch, type SetStateAction } from 'react'

export const MenuContext = createContext<
  [boolean, Dispatch<SetStateAction<boolean>>] | undefined
>(undefined)
