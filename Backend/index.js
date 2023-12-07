import express from 'express';
import mysql from 'mysql'
import cors from 'cors'
import cookieParser from 'cookie-parser';
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

const salt = 10


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
    
    const sql = "insert into login(`name`,`email`,`password`)values(?)";
    
    bcrypt.hash(req.body.password.toString(),salt,(err, hash)=>{
        if (err){
            res.json({Error : "Error in Hashing Passowrd"})
        }else{
            const values = [
                req.body.name,
                req.body.email,
                hash
            ]

            db.query(sql,[values],(error,result)=>{
                if(error){
                    return res.json({Error : "Data is not inserted"})
                }else{
                    return res.json({Status : "Data Successfully Inserted"})
                }
            })
        }
    })


    
})

app.listen(2023,()=>{
    console.log("server listen at 2023")
})