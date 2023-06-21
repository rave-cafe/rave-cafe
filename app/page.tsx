import { getPosts } from 'api/posts/getPosts'
import PATHS from 'constants/paths'
import Link from 'next/link'
import { Fragment } from 'react'

export default async function Page() {
  const posts = await getPosts()

  return posts.map(({ title, author, body, _id }) => (
    <Fragment key={_id}>
      <Link href={`/${PATHS.POSTS}/${_id}`}>
        <h1>{title}</h1>
      </Link>
      <span>{author}</span>
      <p className="whitespace-pre-wrap">{body}</p>
    </Fragment>
  ))
}
