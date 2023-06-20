'use client'

import ViewportSizeContext, {
  TViewportSizeContext,
} from 'context/ViewportSizeContext'
import { PropsWithChildren, useMemo } from 'react'
import tailwindConfig from 'tailwind.config'
import resolveConfig from 'tailwindcss/resolveConfig'
import { useMediaQuery } from 'utils/useMediaQuery'

const config = resolveConfig(tailwindConfig)

type TViewportSizeProvider = PropsWithChildren<{}>

export default function ViewportSizeProvider({
  children,
}: TViewportSizeProvider) {
  const screensConfig = config?.theme?.screens as Record<string, string>

  const { sm, md, lg } = screensConfig ?? {}
  const smBreakpoint = parseInt(sm, 10) - 1
  const mdBreakpoint = parseInt(md, 10) - 1
  const lgBreakpoint = parseInt(lg, 10) - 1

  const isMobile = useMediaQuery(
    `only screen and (max-width : ${smBreakpoint}px)`
  )
  const isTabletOrLarger = useMediaQuery(
    `only screen and (min-width : ${smBreakpoint}px)`
  )
  const isDesktopOrLarger = useMediaQuery(
    `only screen and (min-width : ${mdBreakpoint}px)`
  )
  const isLargeDesktop = useMediaQuery(
    `only screen and (min-width : ${lgBreakpoint}}px)`
  )

  const context: TViewportSizeContext = useMemo(
    () => ({
      isMobile,
      isTabletOrLarger,
      isDesktopOrLarger,
      isLargeDesktop,
    }),
    [isDesktopOrLarger, isLargeDesktop, isMobile, isTabletOrLarger]
  )

  return (
    <ViewportSizeContext.Provider value={context}>
      {children}
    </ViewportSizeContext.Provider>
  )
}
