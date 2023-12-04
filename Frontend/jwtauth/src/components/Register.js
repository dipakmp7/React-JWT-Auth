import React from "react";

function Register(){
    return(
        // <div>Dipak</div>
        <div>
            <form>
                <div className="container">
                    <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" placeholder="Enter Name"></input>
                    </div>
                    <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder="Enter Email"></input>
                    </div>
                    <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder="Enter Password"></input>
                    </div>

                </div>
            </form>
        </div>
    )
}

export default Register