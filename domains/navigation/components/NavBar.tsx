import Image from 'next/image'
import Link from 'next/link'

export default function NavBar() {
  return (
    <div className="absolute bg-gray-400">
      <Link className="relative m-1 flex" href="/">
        <Image alt="Rave Cafe logo" height={40} width={40} src="/rc-logo.svg" />
      </Link>
    </div>
  )
}
