'use client'

import 'styles/global.css'

import * as Dialog from '@radix-ui/react-dialog'
import DialogContainer from 'domains/navigation/components/DialogContainer'
import NavBar from 'domains/navigation/components/NavBar'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <DialogContainer>
      <Dialog.Trigger asChild>
        <NavBar />
      </Dialog.Trigger>
      {children}
    </DialogContainer>
  )
}
