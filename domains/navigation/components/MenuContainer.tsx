'use client'
import Overlay from 'components/Overlay'
import { PropsWithChildren, useState } from 'react'

import { MenuContext } from '../context'

type TMenuContainer = PropsWithChildren<{}>

function MenuContainer({ children }: TMenuContainer) {
  const context = useState(false)

  return (
    <MenuContext.Provider value={context}>
      {children}
      <Overlay />
    </MenuContext.Provider>
  )
}

export default MenuContainer
