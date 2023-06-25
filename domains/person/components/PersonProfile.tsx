import PATHS from 'constants/paths'
import Link from 'next/link'

import { TGetPersonResponse } from '../api/getPerson'

type TPersonProfile = {} & TGetPersonResponse
function PersonProfile({ ...person }: TPersonProfile) {
  return (
    <div>
      <h1>{person.name}</h1>
      <p>{person.location}</p>
      {person.bio?.map((bio) =>
        bio.children.map((el) => <span key={el._key}>{el.text}</span>)
      )}
      <h2>Blog posts</h2>
      <ul>
        {person.posts.map((post) => (
          <Link key={post._id} href={`/${PATHS.BLOG}/${post.slug}`}>
            <li>{post.title}</li>
          </Link>
        ))}
      </ul>
    </div>
  )
}

export default PersonProfile
