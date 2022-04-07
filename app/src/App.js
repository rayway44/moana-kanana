import './App.css';
import Home from './Pages/Home'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import About from './Pages/About';

function App() {
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
