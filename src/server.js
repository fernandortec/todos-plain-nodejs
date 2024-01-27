import http from 'node:http'
import { routes } from './routes.js'

const server = http.createServer(async (req, res) => {
  const { method, url } = req

  const route = routes.find((route) => route.method === method && route.path === url)
  if (route) return route.handler(req, res)

  return res.end()
})

server.listen(3000)