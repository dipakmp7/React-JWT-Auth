import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";                              // Axios library for making HTTP requests (Get,Post,Put,Delete).


function Login() {

    const [values,setValues] = useState({
        email : '',
        password : ''
    })

    const navigate = useNavigate()         // used to navigate to differennt routes

    axios.defaults.withCredentials = true        // Configures Axios to send credentials (such as cookies) with cross-origin requests.

    const handleSubmit = (e) => {
        e.preventDefault()              // Prevents the default form submission behavior.  at the bottom explaination is available
        axios.post("http://localhost:2023/login",values).then(res =>{
            console.log(res)
            if(res.data.Status === "Success"){
                navigate("/")
            }
            else{
                alert(res.data.Error)
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


// When you have a form on a web page and you click the "submit" button, the default behavior is for the browser to send the form data to the server and reload the entire page. This is how traditional HTML forms work.

// Now, imagine you're building a modern web application with React, where you want to handle form submissions more dynamically, without refreshing the whole page. In this case, you use JavaScript to handle the form submission.

// The e.preventDefault() is like saying, "Hey, browser, don't do your usual thing of sending the form and reloading the page. I'll take care of it myself." It stops the default behavior of the form submission.



// It's associated with an input element (probably a text input for an email field) and is updating the state (values) when the user types into that input.

// onChange: This is an event handler that gets triggered whenever the value of the input changes.

// e: It stands for the event object. This object contains information about the event, and in this case, it represents the change event on the input.

// e.target.value: This extracts the current value of the input field when it changes.

// { ...values, email: e.target.value }: This is using the spread operator (...) to create a new object that includes all the existing key-value pairs from the values object (preserving the previous state), and then it updates the email property with the new value obtained from e.target.value.

// setValues: This is a function that updates the state in React. It takes the new state as an argument and triggers a re-render with the updated state.