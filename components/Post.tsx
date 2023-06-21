import { TPost } from 'api/post/types'
import Link from 'next/link'

type TPostProps = {
  href?: string
} & TPost

export default async function Post({ href, title, author, body }: TPostProps) {
  return (
    <>
      <Title href={href}>{title}</Title>
      <span>{author.name}</span>
      <p className="whitespace-pre-wrap">
        {body.map(({ children }) =>
          children.map(({ text, _key }) => <span key={_key}>{text}</span>)
        )}
      </p>
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
