import './App.css';
import Adduser from './Component/Adduser.js';
import Frontpage from './Component/Frontpage';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div>
      <Routes>
        <Route path='/' element = {<Frontpage/>} />
        <Route path='/Adduser' element = {<Adduser />} />
        </Routes>      
    </div>
    </BrowserRouter>
    
  );
}

export default App;
