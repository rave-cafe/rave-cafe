import 'js-video-url-parser/lib/provider/twitch'
import 'js-video-url-parser/lib/provider/vimeo'
import 'js-video-url-parser/lib/provider/youtube'
import 'js-video-url-parser/lib/provider/tiktok'
import 'js-video-url-parser/lib/provider/loom'

import { TGetEmbedResponse } from 'api/embeds/getEmbed'
import urlParser from 'js-video-url-parser/lib/base'
import Link from 'next/link'

type TEmbeddedMedia = {} & TGetEmbedResponse

function EmbeddedMedia({ embedCode, url }: TEmbeddedMedia) {
  if (embedCode) {
    return <div dangerouslySetInnerHTML={{ __html: embedCode }} />
  }

  if (!url) {
    throw new Error(
      '<EmbeddedMedia /> requires one of props `embedCode` or `url`, but received neither.'
    )
  }

  const embedInfo = urlParser.parse(url)

  return (
    <>
      <Link href={url} rel="noopener nofollow" target="_blank">
        {url}
      </Link>

      {/* TODO: switch through embedInfo.provider cases to add support for various services like YouTube, Spotify, etc  */}
      {embedInfo && JSON.stringify(embedInfo)}
    </>
  )
}

export default EmbeddedMedia