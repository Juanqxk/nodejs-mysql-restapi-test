import { createPool } from "mysql2/promise"; //importando funcion createPool de mysql2 para poder hacer la conexion a la base de datos
import {
  PORT,
  DB_DATABASE,
  DB_HOST,
  DB_PASSWORD,
  DB_PORT,
  DB_USER,
} from "./config.js";

// Se establecen los parametros de la conexion
export const pool = createPool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  port: DB_PORT,
  database: DB_DATABASE,
});
