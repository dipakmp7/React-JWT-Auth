import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Home() {

    const [auth, setAuth] = useState(false);     //by deafault false is bcoz user is not authorized first 
    const [name, setName] = useState('')
    const [message, setMessage] = useState('')

    axios.defaults.withCredentials = true

    const navigate = useNavigate()

    useEffect(() => {
        axios.get("http://localhost:2023").then(res => {
            // console.log(res)
            if (res.data.Status === "Success") {
                setAuth(true)
                setName(res.data.name)
                navigate("/")
            }
            else {
                setAuth(false)
                setMessage(res.data.Error)
            }
        }).catch(err => {
            console.log(err)
        })
    }, [])

    return (
        <div className="container mt-4">
            {
                auth ?
                    <div>
                        <h3>Welcome to Home Page, {name}</h3>
                        <button className="btn btn-danger">Logout</button>
                    </div>
                    :
                    <>
                        <div>
                            <h3>Sorry, {message}</h3>
                            <h3> Login Again</h3>
                        </div>
                        <div>
                            <Link to="/login" className="btn btn-primary">Login</Link>
                        </div>
                    </>
            }
        </div>
    )
}

export default Home