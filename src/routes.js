import { Database } from "./config/database.js"
import { buildRoutePath } from "./utils/build-route-path.js"

const database = new Database()

export const routes = [
  {
    method: "GET",
    path: buildRoutePath("/todos/:id"),
    handler: (req, res) => {
      console.log(req.params)
      const todos = database.select("todos")

      return res.end(JSON.stringify(todos))
    }
  }
]