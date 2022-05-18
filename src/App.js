import logo from './logo.svg';
import './App.css';
import NavBar from './component/NavBar/NavBar';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home/Home';


function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      {/* <Home></Home>s */}
      <Routes>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;
