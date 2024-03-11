import { config } from "dotenv"; //importo config de dotenv para poder usar variables de entorno

config(); //inicializo el config de dotenv

//     process:objeto global de node -- env:almacena todas las variables de mi ordenador -- PORT: es una de esas variables de env
console.log(process.env.PORT);

export const PORT = process.env.PORT || 3000;
export const DB_DATABASE = process.env.DB_DATABASE || "companydb";
export const DB_HOST = process.env.DB_HOST || "localhost";
export const DB_USER = process.env.DB_USER || "root";
export const DB_PASSWORD = process.env.DB_PASSWORD || "123456";
export const DB_PORT = process.env.DB_PORT || 3306;
