import ViewportSizeContext from 'context/ViewportSizeContext'
import { useContext } from 'react'

export default function useViewportSize() {
  const context = useContext(ViewportSizeContext)

  if (context === undefined) {
    throw new Error(
      'useViewportSize must be used within a ViewportSizeProvider'
    )
  }

  return context
}
