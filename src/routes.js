import { Database } from "./config/database.js"

const database = new Database()

export const routes = [
  {
    method: "GET",
    path: "/",
    handler: (req, res) => {
      database.insert('todsos')

      return res.end("Hello World")
    }
  }
]