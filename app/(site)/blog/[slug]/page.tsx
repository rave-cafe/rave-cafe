import getPost from 'domains/post/api/getPost'
import getPosts from 'domains/post/api/getPosts'
import Post from 'domains/post/components/Post'
import { redirect } from 'next/navigation'

export async function generateStaticParams() {
  const posts = await getPosts()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function Page({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug)

  if (!post) {
    redirect(`/`)
  }

  return <Post {...post} />
}
