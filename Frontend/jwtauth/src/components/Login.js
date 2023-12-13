import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


function Login() {

    const [values,setValues] = useState({
        email : '',
        password : ''
    })

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:2023/login",values).then(res =>{
            console.log(res)
            if(res.data.Status === "Success"){
                navigate("/")
            }
        }).catch(err => {
            console.log(err)
        })
    }

    return(
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
        <div className="bg-white p-3 rounded w-25">
            <h2>Login Form</h2>
            <form action="" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email"><strong>Email</strong></label>
                    <input type="email" name="email" placeholder="Enter Your Email" onChange={e=>setValues({...values,email:e.target.value})} className="form-control rounded-0"></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="password"><strong>Password</strong></label>
                    <input type="password" name="password" placeholder="Enter Your Password" onChange={e=>setValues({...values,password:e.target.value})} className="form-control rounded-0"></input>
                </div>
                <button type="submit" className="btn btn-success w-100">Login</button>
                <p>You are agree to our term and policies</p>
                <Link to="/register" className="btn btn-default border w-100 bg-light">Create Account</Link>
            </form>
        </div>
    </div>
    )
}

export default Login