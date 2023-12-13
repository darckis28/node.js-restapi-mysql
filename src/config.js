import { config } from "dotenv";
config();
export const PORT = process.env.PORT || 3000;
export const PASSWORD = process.env.DB_PASWORD;
export const HOST = process.env.DB_HOST;
export const USER = process.env.DB_USER;
export const DATABASE = process.env.DB_DATABASE;
export const DBPORT = process.env.DB_PORT;
