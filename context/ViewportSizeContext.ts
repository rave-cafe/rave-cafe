import { createContext } from 'react'

export type TViewportSizeContext = {
  isMobile: boolean
  isTabletOrLarger: boolean
  isDesktopOrLarger: boolean
  isLargeDesktop: boolean
}

export default createContext<TViewportSizeContext | undefined>(undefined)
