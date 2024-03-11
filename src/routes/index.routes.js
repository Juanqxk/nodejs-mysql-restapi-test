import { Router } from "express";
import { ping } from "../controllers/index.controllers.js"; // se importa la funcion (controller) ping

const router = Router(); //creando un enrutador apartir de Router

//ruta diferente a employees
//          ruta   funcion
router.get("/ping", ping);

export default router; //se exporta el router para poder ser importado en el index.js (se importa con el nombre de indexRoutes)
