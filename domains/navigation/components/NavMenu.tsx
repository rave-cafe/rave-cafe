'use client'

import * as Dialog from '@radix-ui/react-dialog'
import Link from 'next/link'
import { ForwardedRef, forwardRef } from 'react'

export type TNavMenu = {
  items: { label: string; href: string }[]
}

export const NavMenu = forwardRef(function NavMenuComponent(
  { items }: TNavMenu,
  ref: ForwardedRef<HTMLUListElement>
) {
  return (
    <ul ref={ref} className="flex flex-col">
      {items.map(({ label, href }) => (
        <Dialog.Trigger key={href}>
          <Link href={href}>
            <li>{label}</li>
          </Link>
        </Dialog.Trigger>
      ))}
    </ul>
  )
})

export default NavMenu
