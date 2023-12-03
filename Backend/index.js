import express from 'express';
import mysql from 'mysql'
import cors from 'cors'
import cookieParser from 'cookie-parser';


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'manager',
    database: 'jwtAuth'
})

const app = express()

app.use(express.json())
app.use(cors())


app.listen(2023,()=>{
    console.log("server listen at 2023")
})