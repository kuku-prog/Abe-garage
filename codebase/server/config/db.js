import mysql from "mysql2/promise";

const dbconfig = {
    connectionLimit: 10,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
};

const pool = mysql.createPool(dbconfig);

async function query(sql, params) { 
    const [row, fields] = await pool.execute(sql, params);
    return row;
}

export default  query ;