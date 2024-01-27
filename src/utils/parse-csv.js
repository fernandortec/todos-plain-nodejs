import fs from 'node:fs';
import { parse } from 'csv-parse';
import { Database } from '../config/database.js';
import { randomUUID } from 'node:crypto'

const database = new Database()

const processFile = async () => {
  const records = []
  const csvPath = new URL('../mass-insert.csv', import.meta.url);

  const parser = fs
    .createReadStream(csvPath)
    .pipe(parse());

  for await (const record of parser) {
    records.push(record)
  }

  records.forEach((todo, index) => {
    if (index > 0) {
      const [title, description] = todo

      const todoToInsert = {
        id: randomUUID(),
        title,
        description
      }

      database.insert("todos", todoToInsert)
    }
  })

  return records
}

(async () => {
  const records = await processFile();
})();