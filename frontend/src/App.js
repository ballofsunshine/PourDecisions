import './App.css';
//import CreateDrink from "./components/createDrink/createDrink.js";
// import ChangePasswordAccount from "./components/changePasswordAccount/changePasswordAccount.js"
import DrinksPage from "./components/viewDrinks/viewDrinks.js"
import ViewAccount from "./components/viewAccount/viewAccount.js"
//import { BrowserRouter, Route, Routes } from 'react-router-dom';

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreateDrink, { IngredientsList } from "./components/createDrink/createDrink";
import Home from "./components/home/home"
import Navbar from './components/navbar/navbar';
import { CreateIngredient } from './components/createDrink/createDrink';
import LogInAccount from './components/logInAccount/logInAccount';
import CreateAdmin from './components/createAdmin/createAdmin';
import LogOutAccount from './components/logOutAccount/logOutAccount';
import ChangePasswordAccount from "./components/changePasswordAccount/changePasswordAccount";
import { CreateAccount } from './components/createAccount/createAccount';
import GetAllDrinks from './components/getAllDrinks/getAllDrinks';

function App() { 
  
  return (
    // ChangePasswordAccount()
    //DrinksPage()
    // ViewAccount()
   
    <div className="wrapper">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/drinks/create" element={<CreateDrink />} />
          <Route path="/drinks/ingredients" element = {<CreateIngredient/>} />
          <Route path="/drinks/test" element = {<IngredientsList/>}/>
          <Route path="/account/update" element={<ChangePasswordAccount/>} />
          <Route path="/account/login" element={<LogInAccount/>} />
          <Route path="/setup" element={<CreateAdmin/>} />
          <Route path="/account/logout" element={<LogOutAccount/>} />
          <Route path="/account/register" element = {<CreateAccount/>} />
          <Route path="/drinks/" element = {<GetAllDrinks/>} />
        </Routes>
      </Router>
    </div>
    );
}

export default App;
