import { documentSelection } from 'api/sanity/document/types'
import { q } from 'groqd'

export const relatedPostsQuery = q('*', { isArray: true })
  .filter('_type == "post" && references(^._id)')
  .grab$({
    ...documentSelection,
    title: q.string(),
    slug: q.slug('slug'),
  })
  .order('_createdAt desc')
