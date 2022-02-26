import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom";
import axios from "axios"


var AXIOS = axios.create({
    baseUrl: 'http:localhost:5000'
})


export default function LogInAccount() {
    const [token, setToken] = useState();
    const [loginUsername, setLoginUsername] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    //Handle User Login
    const errors = {
        name: "Invalid username",
        pass: "Invalid password"
    };
    //Handle form submission
    const handleSubmit = (event) => {
        //Prevent the page form reloading
        event.preventDefault();
        //Check login?
        console.log("BTS")
        const PostData = async () => {
            let res = await AXIOS.post('http:localhost:5000/login', {
                username: loginUsername,
                password: loginPassword
            })
            .then(response => {
                console.log("B")
                setIsSubmitted(true);
            })
            .catch(e => {
                console.log("SAVE ME PLS")
                console.log(e)
            })
        }
        PostData()
        // const GetData = async () => {
        //     try {
        //         console.log("B")
        //         const url = 'http:localhost:5000/login/'+ loginUsername +'/' + loginPassword;
        //         console.log("T")
        //         // const output = await ( await fetch(url) ).json()
        //         console.log("S")
        //         setIsSubmitted(true);
        //     }
        //     catch(err) {
        //         setIsSubmitted(false);
        //         console.log("SAVE ME PLS")
        //         console.log(err);
        //     }
        // }
        // GetData()

        //If this is uncommented, it will always show a login
        // setIsSubmitted(true);
    }
    //React States
    const [errorMessages, setErrorMessages] = useState({}); //Store error msg + field name
    const [isSubmitted, setIsSubmitted] = useState(false); //bool to indicate successfull submission

    //Code for error message
    const renderErrorMessage = (name) =>
        name == errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
        );
    //Code for Login Form
    const renderForm = (
        <div className="login">
            <form onSubmit={handleSubmit}>
            <div>
            <div className="boxLogInAccount">
            <div className="row">
            <div className="columnLeft">
                <h1>Put Image Here</h1>
            </div>
            <div className="columnRight">
                <div>
                    <h1 className="loginTitle">Login</h1>
                    <div>
                            <div>
                             <h4 className="username">Username</h4>
                            </div>
                            <input type="text" name="name" required
                                placeholder="username"
                                onChange={ (e) => setLoginUsername(e.target.value)}
                            />
                            {renderErrorMessage("name")}
                    </div>
                    <div className="formBottom">
                        <div>
                            <h4 className="password">Password</h4>
                        </div>
                        <input type="text" name="pass" required
                            placeholder="password"
                            onChange={(e) => setLoginPassword(e.target.value)}
                        />
                        {renderErrorMessage("pass")}
                    </div>

                    <div className="loginButton">
                        <button type="submit" className="loginConfirm">Login</button>
                    </div>

                    <div className="forgetAccount">
                        <label><b>Don't have an account?</b></label>
                    </div>

                    <div className="signUp">
                        {/* Add the correct link here */}
                        <a href="http://localhost:3000/">sign up</a>
                    </div>

                    


                </div>

            </div>
        </div>
        </div>
        </div>
        </form>
        </div>
    );

    return (
        <div className="app">
      <div className="login-form">
        {isSubmitted ? window.location.href = "http://localhost:3000" : renderForm}
      </div>
    </div>
    // <div>
    //     <h1>TEST</h1>
    // </div>
    );






}