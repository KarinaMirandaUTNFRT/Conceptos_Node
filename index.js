import express from 'express'
import cors from 'cors'

const app = express()
const PORT = 3000

app.use(cors())
app.use(express.json())

console.log('este backend ya escucha')
app.listen(PORT, () => {
    console.info(`servidor activo en el puerto ${PORT}`);
});