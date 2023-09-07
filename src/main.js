// Formatting, Linting, Type Checking
// Formatting: Prettier
// Linting: ESLint
// Type checking: TypeScript

// @ts-check
const somestring = 'hello'
const result = Math.log(somestring)
console.log(result)

const http = require('http')
const server = http.createServer((req, res) => {
  req.statusCode = 200
  res.end('Hello!')
})

const PORT = 4000
server.listen(PORT, () => {
  console.log(`The server is listening at port: ${PORT}.`)
})
