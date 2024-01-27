import { Database } from "./config/database.js"
import { buildRoutePath } from "./utils/build-route-path.js"
import { randomUUID } from 'node:crypto'

const database = new Database()

export const routes = [
  {
    method: "GET",
    path: buildRoutePath("/todos"),
    handler: (req, res) => {
      const todos = database.select("todos")
      return res.end(JSON.stringify(todos))
    }
  },
  {
    method: "POST",
    path: buildRoutePath("/todos"),
    handler: (req, res) => {
      if (!req.body) return res.writeHead(400).end("Body must be present in request")

      const { title, description } = req.body

      if (!title || !description || !title.length || !description.length) {
        return res.writeHead(400).end("One or more values are invalid")
      }

      const todosExist = database.select("todos").find(todo => todo.title === title)
      if (todosExist) return res.writeHead(400).end("Todo already exists")

      const todo = {
        id: randomUUID(),
        title,
        description
      }

      database.insert("todos", todo)

      return res.writeHead(201).end()
    }
  }
]