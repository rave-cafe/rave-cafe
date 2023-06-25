import getEmbeds from 'api/embeds/getEmbeds'
import EmbeddedMedia from 'components/EmbeddedMedia'

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
