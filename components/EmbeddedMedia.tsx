import 'js-video-url-parser/lib/provider/twitch'
import 'js-video-url-parser/lib/provider/vimeo'
import 'js-video-url-parser/lib/provider/youtube'
import 'js-video-url-parser/lib/provider/tiktok'
import 'js-video-url-parser/lib/provider/loom'

import { embedSelection } from 'api/embeds/types'
import { z } from 'groqd'
import urlParser from 'js-video-url-parser/lib/base'
import Link from 'next/link'

const EmbedSelection = z.object(embedSelection)

export type TEmbeddedMedia = {} & z.infer<typeof EmbedSelection>

function EmbeddedMedia({ embedCode, url }: TEmbeddedMedia) {
  if (embedCode) {
    return <div dangerouslySetInnerHTML={{ __html: embedCode }} />
  }

  if (!url) {
    throw new Error(
      // there's def a way for TS to enforce this but that sounds hard, so:
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
