const express = require("express")
const app = express()
const parser = require("body-parser")

app.use(parser.json())

app.use(express.static(__dirname + "../client/dist"))

const port = process.env.port || 8080
app.listen(port, () => console.log(`listening on port ${port}`))