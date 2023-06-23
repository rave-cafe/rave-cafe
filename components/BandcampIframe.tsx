import { TGetEmbedResponse } from 'api/embeds/getEmbed'

type TBandcampIframe = {} & TGetEmbedResponse

function BandcampIframe({ albumId, trackId }: TBandcampIframe) {
  const src = `https://bandcamp.com/EmbeddedPlayer/size=large/bgcol=ffffff/linkcol=0687f5/artwork=small/tracklist=${!trackId}/transparent=true/album=${albumId}}/${
    trackId ? `track=${trackId}/` : ''
  }`

  return (
    <iframe
      style={{ border: 0, width: '100%', height: '120px' }}
      src={src}
      seamless
    />
  )
}

export default BandcampIframe
