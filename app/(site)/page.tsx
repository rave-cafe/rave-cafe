import getPosts from 'api/post/getPosts'
import Post from 'components/Post'
import PATHS from 'constants/paths'

export default async function Page() {
  const posts = await getPosts()

  return posts.map((post) => (
    <Post
      key={post._id}
      href={`/${PATHS.BLOG}/${post.slug.current}`}
      {...post}
    />
  ))
}
