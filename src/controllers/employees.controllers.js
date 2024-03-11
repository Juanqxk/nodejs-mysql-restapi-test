import { pool } from "../db.js";

//controladores (funciones) de los employees, los cuales se importan en las rutas de los mismos employees

//funcion para obtener todos los datos de la tabla
export const getEmployees = async (req, res) => {
  //con try catch se puede manejar los errores inesperados
  try {
    // throw new Error("Error inesperado"); //este es un error de prueba
    const [rows] = await pool.query("SELECT * FROM employee");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({
      message: "Algo salio mal: " + error,
    });
  }
};

//? OTRA MANERA DE MENEJAR LOS ERRORES ES CON UN MODULO DE EXPRESS LLAMADO "EXPRESS PROMISE ROUTER"

// funcion para obtener solo una fila de la tabla segun su ID
export const getEmployeesId = async (req, res) => {
  const idEmpleado = req.params.id; //permite conocer el id ingresado en la url (localhost:300/employees/ID)
  const [rows] = await pool.query("SELECT * FROM employee WHERE id = ?", [
    idEmpleado,
  ]);
  //validacion de error, si no existe el ID se devuelve un 404
  if (rows.length <= 0) {
    return res.status(404).json({ message: "Employees not found" });
  }
  res.json(rows[0]);
};

//metodo que permite guardar datos en una base de datos, datos que son enviados desde el cliente
export const createEmployees = async (req, res) => {
  const { name, salary } = req.body; //se reciben dos datos en el body de la request (datos que envia el cliente)
  //consulta sql que guarda los datos recividos en la tabla de la bd
  const [rows] = await pool.query(
    "INSERT INTO employee (name, salary) VALUES (?, ?)",
    [name, salary]
  );
  // se muestra en pantalla los datos que se guardaron
  res.send({
    id: rows.insertId,
    name,
    salary,
  });
};

//metodo que permite actualizar una fila en la tabla de la BD
export const updateEmployees = async (req, res) => {
  const { id } = req.params;
  const { name, salary } = req.body;
  //sentencia SQL para actualizar al empleado, usando IFNULL por si el cliente no envia los datos completos y solo quiere actualizar una parte
  const [result] = await pool.query(
    "UPDATE employee SET name = IFNULL(?, name), salary = IFNULL(?, salary) WHERE id = ?",
    [name, salary, id]
  );
  console.log(name, salary, id);
  //si las filas afectadas son 0 quiere decir que no existe el empleado en la tabla
  if (result.affectedRows === 0) {
    return res.status(404).json({
      message: "No existe el empleado",
    });
  }

  const [rows] = await pool.query("SELECT * FROM employee WHERE id = ?", [id]);

  res.send(rows[0]);
};

//funcion que elimina un dato de la tabla haciendo uso de su ID
export const deleteEmployees = async (req, res) => {
  const idEmpleado = req.params.id; //permite conocer el id ingresado en la url (localhost:300/employees/ID)
  const [result] = await pool.query("DELETE FROM employee WHERE id = ?", [
    idEmpleado,
  ]);
  //validacion de error, si no existe el ID se devuelve un 404
  if (result.affectedRows < 1) {
    return res.status(404).json({ message: "failed employee deletion" });
  }
  res.sendStatus(204);
};
