import getEmbeds from 'domains/embed/api/getEmbeds'
import EmbeddedMedia from 'domains/embed/components/EmbeddedMedia'

export default async function EmbedsPage() {
  const embeds = await getEmbeds()
  return (
    <>
      <h1>Embeds</h1>
      <ul>
        {embeds.map((embed) => (
          <EmbeddedMedia key={embed._key} {...embed} />
        ))}
      </ul>
    </>
  )
}
