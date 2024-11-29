import fs from "node:fs"
import Database from "better-sqlite3"



export const database = Database(process.env.DB_DATA_SOURCE);

const script = fs.readFileSync(process.env.DB_SQL_SCRIPTS_DIR + "/create-tables.sql", "utf-8");
database.exec(script);
