import type { NextApiRequest, NextApiResponse } from 'next'
 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
console.log(req)
  res.status(200).setHeader('Content-Type','application/json').send(JSON.stringify(req.body))
}