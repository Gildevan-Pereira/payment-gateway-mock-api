import dotenv from 'dotenv';
import express from 'express';

dotenv.config();
const PORT = process.env.SERVER_PORT;

const app = express();

app.get('/', (req, res) => {
    res.send({code: "001", message: "Sucesso"});
})

app.listen(PORT, () => {
    console.log(`Servidor Executando em http://localhost:${PORT}`)
})