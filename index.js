import dotenv from 'dotenv';
import app from './src/app.js';

dotenv.config();
const PORT = process.env.SERVER_PORT;

app.listen(PORT, () => {
    console.log(`Servidor Executando em http://localhost:${PORT}`)
})