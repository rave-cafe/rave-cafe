import Image from 'next/image'
import Link from 'next/link'

export default function NavBar() {
  return (
    <div className="flex w-full bg-gray-400">
      <Link
        className={`relative m-1 flex h-5 w-5 md:m-2 md:h-6 md:w-6`}
        href="/"
      >
        <Image
          alt="Rave Cafe logo"
          className="object-contain"
          fill
          src="/rc-logo.svg"
        />
      </Link>
    </div>
  )
}
