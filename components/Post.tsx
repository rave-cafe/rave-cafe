import { TPost } from 'api/posts/types'
import Link from 'next/link'

type TPostProps = {
  href?: string
} & TPost

export default async function Post({ href, title, author, body }: TPostProps) {
  return (
    <>
      <Title href={href}>{title}</Title>
      <span>{author}</span>
      <p className="whitespace-pre-wrap">{body}</p>
    </>
  )
}

function Title({ href, children }: { href?: string; children: string }) {
  if (href) {
    return (
      <Link href={href}>
        <h1>{children}</h1>
      </Link>
    )
  }
  return <h1>{children}</h1>
}
