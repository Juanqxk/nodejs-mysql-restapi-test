import { pool } from "../db.js"; //importo la funcion pool que crea la conexion a la base de datos

// funcion que realiza una query
export const ping = async (req, res) => {
  const [result] = await pool.query("SELECT 'PONG' AS result");
  res.json(result);
};
