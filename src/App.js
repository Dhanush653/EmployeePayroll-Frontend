import './App.css';
// import Adduser from './Component/Adduser.js';
import Frontpage from './Component/Frontpage';
import { Employeeform } from './Component/Employeeform.js';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div>
      <Routes>
        <Route path='/' element = {<Frontpage/>} />
        <Route path='/Employeeform' element = {<Employeeform />} />
        <Route path='/update/:id' element = { <Employeeform />} /> 
      </Routes>      
    </div>
    </BrowserRouter>
    
  );
}

export default App;
