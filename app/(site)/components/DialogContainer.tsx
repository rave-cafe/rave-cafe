'use client'
import * as Dialog from '@radix-ui/react-dialog'
import { PropsWithChildren, ReactNode } from 'react'

type TDialogContainer = PropsWithChildren<{
  dialog: ReactNode
}>

function DialogContainer({ children, dialog }: TDialogContainer) {
  return (
    <Dialog.Root>
      {children}
      <Dialog.Portal>{dialog}</Dialog.Portal>
    </Dialog.Root>
  )
}

export default DialogContainer
