import './App.css';
import Home from './components/Home';
import Login from './Pages/Login'
import Register from './Pages/Register'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <Home/> */}
     <Router>
      <Routes>
        <Route element={<Login/>} path='/' />
        <Route element={<Register/>} path='/register' />
        <Route element={<Home/>} path='/home' />
      </Routes>
     </Router>
    </div>
  );
}

export default App;
