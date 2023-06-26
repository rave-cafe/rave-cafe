'use client'

import 'styles/global.css'

import * as Dialog from '@radix-ui/react-dialog'
import MenuContainer from 'domains/navigation/components/MenuContainer'
import NavBar from 'domains/navigation/components/NavBar'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <MenuContainer>
      <Dialog.Trigger asChild>
        <NavBar />
      </Dialog.Trigger>
      {children}
    </MenuContainer>
  )
}
