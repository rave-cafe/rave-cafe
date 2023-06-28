'use client'

import 'styles/global.css'

import * as Dialog from '@radix-ui/react-dialog'
import MenuIcon from 'domains/navigation/components/MenuIcon'
import NavMenu from 'domains/navigation/components/NavMenu'

import DialogContainer from './components/DialogContainer'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <DialogContainer dialog={<NavMenu />}>
      <Dialog.Trigger asChild>
        <MenuIcon />
      </Dialog.Trigger>
      <main>{children}</main>
    </DialogContainer>
  )
}
