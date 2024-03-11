import express from "express"; //permite usar el framework express
import employeesRoutes from "./routes/employees.routes.js"; //importo el archivos de las rutas de los employees
import indexRoutes from "./routes/index.routes.js"; //importo el archivos de las rutas externas a los employees

const app = express(); // constante que hace referencia a express, para crear el servidor

app.use(express.json()); // indicando que los datos mandados por el cliente se usen como jsons

app.use(indexRoutes); // se utilizan las rutas que se encuentran en el archivo index.routes.js
app.use("/api", employeesRoutes); // se utilizan las rutas que se encuentran en el archivo employees.routes.js

//cuando se visite una url (endpoint) que no existe se responderá con un 404 y un mensaje de error
app.use((req, res, next) => {
  res.status(404).json({
    message: "endpoint not found",
  });
});

export default app;

//?en este archivo se encuentra la aplicacion node, donde se definen los parametros que necesita la app para funcionar
