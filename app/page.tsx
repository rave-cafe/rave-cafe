import { getPosts } from 'api/posts/getPosts'
import { Fragment } from 'react'

export default async function Page() {
  const posts = await getPosts()

  return posts.map(({ title, author, body, _createdAt }) => (
    <Fragment key={_createdAt}>
      <h1>{title}</h1>
      <span>{author}</span>
      <p className="whitespace-pre-wrap">{body}</p>
    </Fragment>
  ))
}
