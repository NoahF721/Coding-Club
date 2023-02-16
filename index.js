import * as express from "express";
import { message } from "../index1";
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send(message)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})