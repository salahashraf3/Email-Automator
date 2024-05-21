import './App.css';
import Home from './pages/Home';
// import Home from './pages/Home';
import Login from './pages/Login';
import {Route,Routes} from "react-router-dom"
import Register from './pages/Register';
import Edit from './pages/Edit';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/edit' element={<Edit/>}/>
    </Routes>
  
  );
}

export default App;
