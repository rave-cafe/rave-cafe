import Image from 'next/image'
import Link from 'next/link'

export default function NavBar() {
  return (
    <div className="fixed m-1 rounded-full bg-yellow-300">
      <Link className="relative flex" href="/">
        <Image alt="Rave Cafe logo" height={48} width={48} src="/rc-logo.svg" />
      </Link>
    </div>
  )
}
