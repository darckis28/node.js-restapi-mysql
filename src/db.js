import { createPool } from "mysql2/promise";
import { DBPORT, DATABASE, PASSWORD, HOST, USER } from "./config.js";
export const pool = createPool({
  host: HOST,
  user: USER,
  password: PASSWORD,
  port: DBPORT,
  database: DATABASE,
});
