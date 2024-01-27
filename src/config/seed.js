import { Database } from "./database.js";

const seedTables = () => {
  const database = new Database()
  database.addTable("todos")
}

seedTables()