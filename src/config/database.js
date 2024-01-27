import fs from 'node:fs/promises'

const databasePath = new URL('local.db.json', import.meta.url);

export class Database {
  #database = {}

  #persist() {
    fs.writeFile(databasePath, JSON.stringify(this.#database))
  }

  #findIndexById(tableName, id) {
    const rowIndex = this.#database[tableName].findIndex(row => row.id === id)
    if (rowIndex === -1) throw new Error("Item does not exists")

    return rowIndex
  }

  #readFileAndPersist() {
    fs.readFile(databasePath, 'utf-8').then(data => { this.#database = JSON.parse(data) }).catch(() => {
      this.#persist()
    })
  }

  constructor() {
    this.#readFileAndPersist()
  }

  addTable(tableName) {
    this.#database[tableName] = []
    this.#persist()
  }

  insert(tableName, data) {
    const tableExists = this.#database[tableName]
    if (!tableExists) throw new Error("Table does not exists")

    data = {
      ...data,
      created_at: new Date(),
      updated_at: new Date(),
      completed_at: null,
    }

    this.#database[tableName].push(data)
    this.#persist()
  }

  select(tableName) {
    this.#readFileAndPersist()

    const items = this.#database[tableName]

    return items
  }

  delete(tableName, id) {
    const rowIndex = this.#findIndexById(tableName, id)

    this.#database[tableName].splice(rowIndex, 1)
    this.#persist()
  }

  update(tableName, id, data) {
    const rowIndex = this.#findIndexById(tableName, id)

    const item = this.#database[tableName][rowIndex]
    this.#database[tableName][rowIndex] = { id, ...item, ...data }

    this.#persist()
  }
}