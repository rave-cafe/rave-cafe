import { getPosts } from 'api/posts/getPosts'
import { TPost } from 'api/posts/types'
import getSanityDocument from 'api/sanityDocuments/getSanityDocument'
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

  const post = await getSanityDocument<TPost>(postId)

  if (!post) {
    redirect(`/`)
  }

  return <Post {...post} />
}
