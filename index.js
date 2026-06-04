import express from 'express'
const app = express()
const PORT = 3000
console.log('este backend ya escucha')
app.listen(PORT, () => {
    console.info(`servidor activo en el puerto ${PORT}`);
});