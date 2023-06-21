import { getPosts } from 'api/posts/getPosts'
import { TPost } from 'api/posts/types'
import { getDocument } from 'api/sanityDocuments/getDocument'
import { redirect } from 'next/navigation'
import { Fragment } from 'react'

export async function generateStaticParams() {
  const posts = await getPosts()

  return posts.map((post) => ({
    postId: post._id,
  }))
}

export default async function Page({ params }: { params: { postId: string } }) {
  const postId = params.postId

  const post = await getDocument<TPost>(postId)

  if (!post) {
    redirect(`/`)
  }

  const { _id, title, author, body } = post

  return (
    <Fragment key={_id}>
      <h1>{title}</h1>
      <span>{author}</span>
      <p className="whitespace-pre-wrap">{body}</p>
    </Fragment>
  )
}
