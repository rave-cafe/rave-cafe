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
    <ul ref={ref}>
      {items.map(({ label, href }) => (
        <Link href={href} key={href}>
          <li>{label}</li>
        </Link>
      ))}
    </ul>
  )
})

export default NavMenu
