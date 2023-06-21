import { getPosts } from 'api/posts/getPosts'
import Post from 'components/Post'
import PATHS from 'constants/paths'

export default async function Page() {
  const posts = await getPosts()

  return posts.map((post) => (
    <Post key={post._id} href={`/${PATHS.POSTS}/${post._id}`} {...post} />
  ))
}
