import './App.css';
import CreateDrink from "./components/createDrink/createDrink.js";
import ChangePasswordAccount from "./components/changePasswordAccount/changePasswordAccount.js"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LogInAccount from './components/logInAccount/logInAccount';
//<button onClick={<CreateDrink />}>Click</button>
//<CreateDrink />
function App() {


  return (
    ChangePasswordAccount()
    // <div className="App">
      
    //   <h1>PourDecisions</h1>

      
    // </div>


    // <div className="wrapper">
    //   <h1>PourDecisions</h1>
    //   <BrowserRouter>
    //     <Routes>
    //       <Route path="/LogInAccount" element={<LogInAccount/>} />
    //     </Routes>
    //   </BrowserRouter>
    // </div>
    
  );
}

export default App;
