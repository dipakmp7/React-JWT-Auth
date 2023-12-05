import React from "react";
import { Link } from "react-router-dom";

function Register(){
    return(
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
            <div className="bg-white p-3 rounded w-25">
                <h2>Sign-Up Form</h2>
                <form action="">
                <div className="mb-3">
                        <label htmlFor="name"><strong>Name</strong></label>
                        <input type="text" name="name" placeholder="Enter Your Name" className="form-control rounded-0"></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email"><strong>Email</strong></label>
                        <input type="email" name="email" placeholder="Enter Your Email" className="form-control rounded-0"></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password"><strong>Password</strong></label>
                        <input type="password" name="password" placeholder="Enter Your Password" className="form-control rounded-0"></input>
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