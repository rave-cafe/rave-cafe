import getEmbeds from 'api/embeds/getEmbeds'

export default async function EmbedsPage() {
  const embeds = await getEmbeds()
  return (
    <>
      <h1>Embeds</h1>
      <ul>
        {embeds.map((embed) => (
          <li key={embed._id}>{embed.albumId}</li>
        ))}
      </ul>
    </>
  )
}
