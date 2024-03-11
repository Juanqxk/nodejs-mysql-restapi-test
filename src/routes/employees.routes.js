import { Router } from "express";
import {
  getEmployees,
  createEmployees,
  updateEmployees,
  deleteEmployees,
  getEmployeesId,
} from "../controllers/employees.controllers.js"; //importacion de las funciones (controllers) de los employees

const router = Router(); //creando un enrutador apartir de Router

//rutas de los employees, en donde se hacen uso de las funciones creadas como controllers en sus respectivos ficheros
//            ruta         funcion
router.get("/employees", getEmployees); //traer todos los empleados
router.get("/employees/:id", getEmployeesId); //traer a un solo empleado
router.post("/employees", createEmployees); //mandar a guardar a un empleado a la BD
router.patch("/employees/:id", updateEmployees); //actualizar un empleado, aqui se puede usar PUT o PATCH
router.delete("/employees/:id", deleteEmployees); //eliminar un empleado

export default router;
