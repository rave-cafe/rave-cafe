import { getPosts } from 'api/posts/getPosts'

export default async function Page() {
  const posts = await getPosts()
  console.log(posts)
  return <>HIIIII</>
}
