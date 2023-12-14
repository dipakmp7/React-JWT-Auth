//Following code is user registration and login using a MySQL database. It uses the bcrypt library to hash and compare passwords securely and JWT for user authentication.


import express from 'express';
import mysql from 'mysql'
import cors from 'cors'
import cookieParser from 'cookie-parser';
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

const salt = 10      //The salt value of 10 is used as the cost factor for the bcrypt hashing algorithm.A common range for the cost factor is between 10 and 12, but it depends on your application's specific needs and performance considerations.


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'manager',
    database: 'LoginRegister'
})

const app = express()

app.use(express.json())
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ['POST','GET'],
    credentials: true
}))
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
                        const name = data[0].name
                        const token = jwt.sign({name},"jwt-secret-key",{expiresIn : '1d'})
                        res.cookie('token',token)

                        // The first argument to jwt.sign is the payload. In this case, it's an object with a single property name, which holds the user's name.
                        // The second argument is the secret key used for signing the token.
                        // The third argument is an options object. Here, expiresIn: '1d' specifies that the token will expire in one day.
                        
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