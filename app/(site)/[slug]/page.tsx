import getStaticContent from 'domains/static-content/api/getStaticContent'
import getStaticContents from 'domains/static-content/api/getStaticContents'
import StaticContent from 'domains/static-content/components/StaticContent'

export async function generateStaticParams() {
  const contents = await getStaticContents()

  return contents.map((contents) => ({
    slug: contents.slug,
  }))
}

export default async function SlugPage({ params }) {
  const { slug } = params as { slug: string | undefined }
  if (!slug) {
    throw new Error('No slug found in params')
  }
  const content = await getStaticContent(slug)

  return <StaticContent {...content} />
}
