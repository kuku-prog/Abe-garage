import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
const host = process.env.SERVER_HOST;
const port = process.env.SERVER_PORT;

const app = express();
import indexRoutes from './routes/index.js';
app.use(indexRoutes);


app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`http://${host}:${port}`));