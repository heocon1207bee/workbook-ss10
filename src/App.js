import './App.css';
import {BrowserRouter, Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home'
import Resource from './pages/Resource';
import About from './pages/About'
import SignUp from './pages/SignUp';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/resource' element={<Resource />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/signup' element={<SignUp />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
