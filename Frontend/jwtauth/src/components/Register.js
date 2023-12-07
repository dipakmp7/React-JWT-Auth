import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'

function Register(){

    const [values,setValues] = useState({
        name : '',
        email : '',
        password : ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:2023/register",values).then(res =>{
            console.log(res)
        }).catch(err => {
            console.log(err)
        })
    }

    return(
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
            <div className="bg-white p-3 rounded w-25">
                <h2>Sign-Up Form</h2>
                <form action="" onSubmit={handleSubmit}>
                <div className="mb-3">
                        <label htmlFor="name"><strong>Name</strong></label>
                        <input type="text" name="name" placeholder="Enter Your Name" onChange={e=>setValues(e.target.name)} className="form-control rounded-0"></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email"><strong>Email</strong></label>
                        <input type="email" name="email" placeholder="Enter Your Email" onChange={e=>setValues(e.target.email)} className="form-control rounded-0"></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password"><strong>Password</strong></label>
                        <input type="password" name="password" placeholder="Enter Your Password" onChange={e=>setValues(e.target.password)} className="form-control rounded-0"></input>
                    </div>
                    <button type="submit" className="btn btn-success w-100">Sign Up</button>
                    <p>You are agree to our term and policies</p>
                    <Link to="/login" className="btn btn-default border w-100 bg-light">Login</Link>
                </form>
            </div>
        </div>
    )
}

export default Register