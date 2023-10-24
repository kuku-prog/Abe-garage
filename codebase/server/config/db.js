import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config();
const host = process.env.DB_HOST;
const port = process.env.DB_PORT;
const password = process.env.DB_PASS;
const user = process.env.DB_USER;
const database = process.env.DB_NAME;

const connnection=mysql.createConnection({
    host,port,password,user, database
});


connnection.connect((err)=>{
    if(err){ console.log(err)}
    else{
            console.log("DB is connected "+ connnection.threadId);
    }

}
);

export default connnection;