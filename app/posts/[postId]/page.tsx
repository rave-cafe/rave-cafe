import getPosts from 'api/post/getPosts'
import { postProjection, TPost } from 'api/post/types'
import getSanityDocument from 'api/sanity/document/getSanityDocument'
import Post from 'components/Post'
import { redirect } from 'next/navigation'

export async function generateStaticParams() {
  const posts = await getPosts()

  return posts.map((post) => ({
    postId: post._id,
  }))
}

export default async function Page({ params }: { params: { postId: string } }) {
  const postId = params.postId

  const post = await getSanityDocument<TPost>(postId, postProjection)

  if (!post) {
    redirect(`/`)
  }

  return <Post {...post} />
}
