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
    
    bcrypt.hash(req.body.password.toString(),salt,(err, hash)=>{                       // here we store password using bcrypt.hash in database
        if (err){
            res.json({Error : "Error in Hashing Passowrd"})
        }else{
            const values = [
                req.body.name,
                req.body.email,
                hash
            ]

            db.query(sql,[values],(error,result)=>{
                console.log(result)
                if(error){
                    return res.json(error)
                }else{
                    return res.json({Status : "Success"})
                }
            })
        }
    })   
})

app.post("/login",(req,res)=>{
    const sql = "select * from login where email = ?"

    db.query(sql,[req.body.email],(err,data)=>{
        if(err){
            return res.json({Error: "Failed"})
        }else{
            if(data.length > 0){
                bcrypt.compare(req.body.password.toString(),data[0].password,(error,result)=>{    // here we compare our login password with database password
                    if(error) return res.json({Error : "Password not compare"})
                    if(result){
                        // console.log(result)
                        return res.json({Status: "Success"})
                    }else{
                        return res.json({Status:"Password not matches"})
                    }
                })
            }else{
                return res.json({Error : "Email does not exist"})
            }
        }
    })
})

app.listen(2023,()=>{
    console.log("server listen at 2023")
})