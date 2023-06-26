import { useContext } from 'react'

import { MenuContext } from './context'

export function useIsMenuOpen() {
  const context = useContext(MenuContext)
  if (context === undefined) {
    throw new Error('useIsMenuOpen can only be used within a <MenuContainer>')
  }
  return context
}
