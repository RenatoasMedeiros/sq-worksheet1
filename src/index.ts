import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.html('<h1>Hello, MEI QS!</h1><br><h2>2024/25</h2>')
  })

export default app
