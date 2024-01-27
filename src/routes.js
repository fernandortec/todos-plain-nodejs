import { Database } from "./config/database.js"
import { buildRoutePath } from "./utils/build-route-path.js"
import { randomUUID } from 'node:crypto'

const database = new Database()

const enforceValidValues = (title, description, res) => {
  if (!title || !description || !title.length || !description.length) {
    return res.writeHead(400).end("One or more values are invalid")
  }
}

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
      const { title, description } = req.body

      enforceValidValues(title, description, res)

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
  },
  {
    method: "PUT",
    path: buildRoutePath("/todos/:id"),
    handler: (req, res) => {
      const { id } = req.params
      const { title, description } = req.body

      enforceValidValues(title, description, res)
      database.update('todos', id, { title, description })

      return res.writeHead(204).end()
    }
  },
  {
    method: "DELETE",
    path: buildRoutePath("/todos/:id"),
    handler: (req, res) => {
      const { id } = req.params

      database.delete('todos', id)

      return res.writeHead(204).end()
    }
  }
]