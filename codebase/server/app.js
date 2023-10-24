import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
const host = process.env.SERVER_HOST;
const port = process.env.SERVER_PORT;
const app = express()
// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
    origin: (origin, callback) => {
        // Allow requests from any origin
        callback(null, true);
    },
    credentials: true // Allow credentials (cookies) to be sent
  }));
  
import routes from './routes/index.js';
app.use(routes);



app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`http://${host}:${port}!`))