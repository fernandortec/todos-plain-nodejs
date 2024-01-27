import fs from 'node:fs/promises'

const databasePath = new URL('local.db.json', import.meta.url);

export class Database {
  #database = {}

  #persist() {
    fs.writeFile(databasePath, JSON.stringify(this.#database))
  }

  constructor() {
    fs.readFile(databasePath, 'utf-8').then(data => { this.#database = JSON.parse(data) }).catch(() => {
      this.#persist()
    })
  }

  addTable(tableName) {
    this.#database[tableName] = []
    this.#persist()
  }

  insert(tableName, data) {
    const tableExists = this.#database[tableName]
    if (!tableExists) throw new Error("Table does not exists")

    this.#database[tableName].push(data)
  }

  select(tableName) {
    const items = this.#database[tableName];
    return items
  }
}