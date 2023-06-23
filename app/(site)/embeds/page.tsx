import getEmbeds from 'api/embeds/getEmbeds'
import BandcampIframe from 'components/BandcampIframe'

export default async function EmbedsPage() {
  const embeds = await getEmbeds()
  return (
    <>
      <h1>Embeds</h1>
      <ul>
        {embeds.map((embed) => (
          <BandcampIframe key={embed._id} {...embed} />
        ))}
      </ul>
    </>
  )
}
