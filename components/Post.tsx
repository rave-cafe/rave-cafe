import { TGetPostResponse } from 'api/post/getPost'
import PATHS from 'constants/paths'
import Link from 'next/link'

import EmbeddedMedia from './EmbeddedMedia'

type TPostProps = {
  href?: string
} & TGetPostResponse

export default async function Post({ href, title, author, body }: TPostProps) {
  return (
    <>
      <Title href={href}>{title}</Title>
      <Link href={`/${PATHS.PERSON}/${author.slug}`}>
        <span>{author.name}</span>
      </Link>
      <p className="whitespace-pre-wrap">
        {body.map(({ children }) =>
          children?.map((child) => {
            if ('_key' in child) {
              return <span key={child._key}>{child.text}</span>
            }

            if ('embedCode' in child) {
              return <EmbeddedMedia key={child._id} {...child} />
            }
          })
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
