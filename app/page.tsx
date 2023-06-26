import PATHS from 'constants/paths'
import getPosts from 'domains/post/api/getPosts'
import Post from 'domains/post/components/Post'

export default async function Page() {
  const posts = await getPosts()

  return posts.map((post) => (
    <Post key={post._id} href={`/${PATHS.BLOG}/${post.slug}`} {...post} />
  ))
}
