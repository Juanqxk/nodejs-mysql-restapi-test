import app from "./app.js";
import { PORT } from "./config.js";

app.listen(PORT); //se pone al servidor a escuchar en un puerto en especifico
console.log("servidor corriendo en el puerto ", PORT);

//?en este archivo se inicializa el servidor o la aplicacion
