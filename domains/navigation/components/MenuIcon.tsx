'use client'

import Image from 'next/image'
import { ForwardedRef, forwardRef, HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

export type TMenuIcon = {} & HTMLAttributes<HTMLButtonElement>

const MenuIcon = forwardRef(function MenuIcon(
  props: TMenuIcon,
  ref: ForwardedRef<HTMLDivElement>
) {
  return (
    <div
      ref={ref}
      className={twMerge(
        'fixed m-1 flex flex-col rounded-full bg-yellow-300',
        props.className
      )}
    >
      <button className="relative m-0.5 flex" {...props}>
        <Image alt="Rave Cafe logo" height={48} width={48} src="/rc-logo.svg" />
      </button>
    </div>
  )
})

export default MenuIcon
