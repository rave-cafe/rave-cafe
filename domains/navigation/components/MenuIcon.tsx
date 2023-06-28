'use client'

import Image from 'next/image'
import { HTMLAttributes } from 'react'

export type TMenuIcon = {} & HTMLAttributes<HTMLButtonElement>

export default function MenuIcon(props: TMenuIcon) {
  return (
    <div className="fixed m-1 rounded-full bg-yellow-300">
      <button className="relative m-0.5 flex" {...props}>
        <Image alt="Rave Cafe logo" height={48} width={48} src="/rc-logo.svg" />
      </button>
    </div>
  )
}
