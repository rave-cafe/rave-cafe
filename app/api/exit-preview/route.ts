import { NextApiRequest, NextApiResponse } from 'next'

export default function GET(
  req: NextApiRequest,
  res: NextApiResponse<string | void>
) {
  res.clearPreviewData()
  res.writeHead(307, { Location: '/' })
  res.end()
}
