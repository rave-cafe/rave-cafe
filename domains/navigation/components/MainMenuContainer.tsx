'use client'

import * as Dialog from '@radix-ui/react-dialog'
import DialogContainer from 'app/(site)/components/DialogContainer'
import MenuIcon from 'domains/navigation/components/MenuIcon'
import { PropsWithChildren, ReactNode } from 'react'

type TMainMenuContainer = PropsWithChildren<{
  menu: ReactNode
}>

export default function MainMenuContainer({
  menu,
  children,
}: TMainMenuContainer) {
  return (
    <DialogContainer
      dialog={
        <Dialog.Overlay className="fixed bottom-0 left-0 right-0 top-0 grid place-items-center overflow-y-auto bg-yellow-300">
          <Dialog.Content>{menu}</Dialog.Content>
        </Dialog.Overlay>
      }
    >
      <Dialog.Trigger asChild>
        <MenuIcon className="z-10" />
      </Dialog.Trigger>
      {children}
    </DialogContainer>
  )
}
