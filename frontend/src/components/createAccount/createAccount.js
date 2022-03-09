import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
// import axios from "axios"
import AXIOS from "../../axios.config"
import './createAccount.css'

export function CreateAccount() {

    const[formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    })

    const { username, email, password } = formData

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()

        console.log("Form submitted")
        console.log(username)
        console.log(email)
        console.log(password)
        
        console.log(formData)
        // axios.post('http://localhost:5000/users/register', formData)
        // .then(res => console.log(res.data))
        AXIOS.post('/users/register', formData)
        .then( res => console.log(res.data))

    }

    return (
        <>
        <section className="heading">
            <h1>Enter the following information below</h1>
        </section>
        <div>
        <img src={require('../changePasswordAccount/martini.png')} id="martini" alt="Martini Glass Logo" title="Martini Glass"width="200px"></img>
        </div>
        
        <section className="form">
            <form onSubmit={ onSubmit }>
                <input type='text' id='accountName' name='username' value= { username } placeholder='Enter account name'
                onChange={ onChange } />
                <input type='text' id='accountEmail' name='email' value= { email } placeholder='Enter email'
                onChange={ onChange } />
                <input type='password' id='accountPassword' name='password' value= { password } placeholder='Enter password'
                onChange={ onChange } />
                <button type='submit'>Create</button>
            </form>
        </section>
        <br></br>
        </>
    )
}
