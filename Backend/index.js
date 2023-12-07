import express from 'express';
import mysql from 'mysql'
import cors from 'cors'
import cookieParser from 'cookie-parser';
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'manager',
    database: 'LoginRegister'
})

const app = express()

app.use(express.json())
app.use(cors())
app.use(cookieParser())


app.post("/register",(req,res)=>{
    const name = req.body.name
    const email = req.body.email
    const password = req.body.password

    const sql = "insert into login(`name`,`email`,`password`)values(?)";

    mysql.query(sql,[name,email,password],(result)=>{
        console.log(res.result)
    })
})

app.listen(2023,()=>{
    console.log("server listen at 2023")
})