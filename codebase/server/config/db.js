import mysql from "mysql2/promise";
import dotenv from 'dotenv';
dotenv.config();

console.log({
  connectionLimit: 10,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME
});
const pool = mysql.createPool(
    {
    connectionLimit: 10,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME
    }
);
async function query(sql, params) { 
    const [row, fields] = await pool.execute(sql, params);
    return row;
}

// async function testConnection() {
//   try {
//     // Execute a test query to check the connection
//     const [rows, fields] = await pool.execute('SELECT 1');
//     console.log('Connected to the database successfully!');
//     // console.log('Connection ID:', pool.threadId);
//   } catch (error) {
//     console.error('Error connecting to the database:', error);
//   } finally {
//     // Close the pool to release the resources
//     pool.end();
//   }
// }

// testConnection();


export default {query} ;