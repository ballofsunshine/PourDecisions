import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom";


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
        const GetData = async () => {
            try {
                const url = 'http:localhost:3030/login/'+ loginUsername +'/' + loginPassword;
                const output = await ( await fetch(url) ).json()
                setIsSubmitted(true);
            }
            catch(err) {
                setIsSubmitted(false);
                console.log(err);
            }
        }

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
            <div class="boxLogInAccount">
            <div class="row">
            <div class="columnLeft">
                <h1>Put Image Here</h1>
            </div>
            <div class="columnRight">
                <div>
                    <h1 class="loginTitle">Login</h1>
                    <div>
                            <div>
                             <h4 class="username">Username</h4>
                            </div>
                            <input type="text" name="name" required
                                placeholder="username"
                                onChange={ (e) => setLoginUsername(e.target.value)}
                            />
                            {renderErrorMessage("name")}
                    </div>
                    <div class="formBottom">
                        <div>
                            <h4 class="password">Password</h4>
                        </div>
                        <input type="text" name="pass" required
                            placeholder="password"
                            onChange={(e) => setLoginPassword(e.target.value)}
                        />
                        {renderErrorMessage("pass")}
                    </div>

                    <div class="loginButton">
                        <button type="submit" class="loginConfirm">Login</button>
                    </div>

                    <div class="forgetAccount">
                        <label><b>Don't have an account?</b></label>
                    </div>

                    <div class="signUp">
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
        {isSubmitted ? window.location.href = "http://localhost:3000/" : renderForm}
      </div>
    </div>
    // <div>
    //     <h1>TEST</h1>
    // </div>
    );






}