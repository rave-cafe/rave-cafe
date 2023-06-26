'use client'

import Image from 'next/image'

import { useIsMenuOpen } from '../hooks'

export default function NavBar() {
  const [_, setIsMenuOpen] = useIsMenuOpen()
  return (
    <div className="fixed m-1 rounded-full bg-yellow-300">
      <button
        className="relative m-0.5 flex"
        onClick={() => setIsMenuOpen((bool) => !bool)}
      >
        <Image
          alt="Rave Cafe logo"
          height={48}
          width={48}
          src="/rc-logo.svg"
          className="fill-red-500"
        />
      </button>
    </div>
  )
}
