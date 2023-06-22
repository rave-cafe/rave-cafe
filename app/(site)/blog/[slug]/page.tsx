import getPost from 'api/post/getPost'
import getPosts from 'api/post/getPosts'
import Post from 'components/Post'
import { redirect } from 'next/navigation'

export async function generateStaticParams() {
  const posts = await getPosts()

  return posts.map((post) => ({
    slug: post.slug.current,
  }))
}

export default async function Page({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug)

  if (!post) {
    redirect(`/`)
  }

  return <Post {...post} />
}
