import PATHS from 'constants/paths'
import EmbeddedMedia from 'domains/embed/components/EmbeddedMedia'
import Link from 'next/link'

import { TGetPostResponse } from '../api/getPost'

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
        {body.map((item) => {
          if ('children' in item) {
            return item.children.map((child) => {
              return <span key={child._key}>{child.text}</span>
            })
          }

          if ('url' in item && item._type === 'embed') {
            return <EmbeddedMedia key={item._key} {...item} />
          }
        })}
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
