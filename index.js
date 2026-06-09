import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import {dirname} from'path';
import { fileURLToPath } from 'url';

const app = express()
const PORT = 3000

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))
const __dirname = dirname (fileURLToPath(import.meta.url))
console.log(__dirname + '/public')

app.use(express.static(__dirname + '/public'))
console.log('este backend ya escucha')

app.get("/api/saludo", (req, res)=> {
console.log('Me llego solicitud nueva');
res.json ( 
    { 
    mensaje:"conexion creada",
    saludo:"Bienvenido a nuestro backend",
}
)
});

app.get("/karina/Prueba1", (req, res)=> {
const comida = ['😍' ,'😂','😁','😊','😉']
    res.json ( 
    { 
    mensaje:"conexion de prueba 1 exitosa",
    comida
}
)
});
app.listen(PORT, () => {
    console.info(`servidor activo en el puerto ${PORT}`);
});