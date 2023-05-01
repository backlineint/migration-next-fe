export const config = {
  runtime: 'edge',
  regions: ['sfo1', 'iad1'],
}

export default async function handler(req) {
  return new Response(
    JSON.stringify({
      message: 'This is an important api route',
    }),
    {
      status: 200,
      headers: {
        'content-type': 'application/json',
      },
    }
  )
}