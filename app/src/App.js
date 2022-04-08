import './App.css';
import Home from './Pages/Home'
import About from './Pages/About';
import Login from './Components/cms entry/Login'
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {

 const [isLoggedIn, setisLoggedIn] = useState(null);
 const logIn = () => {
 setisLoggedIn(true);
 };
 const logOut = () => {
 setisLoggedIn(false);
 };
  return (
    <div className="App">
      <Router>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
