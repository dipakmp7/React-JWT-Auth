import React from "react";
import { Link } from "react-router-dom";

function Login() {
    return(
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
        <div className="bg-white p-3 rounded w-25">
            <h2>Login Form</h2>
            <form action="" >
                <div className="mb-3">
                    <label htmlFor="email"><strong>Email</strong></label>
                    <input type="email" name="email" placeholder="Enter Your Email" className="form-control rounded-0"></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="password"><strong>Password</strong></label>
                    <input type="password" name="password" placeholder="Enter Your Password" className="form-control rounded-0"></input>
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