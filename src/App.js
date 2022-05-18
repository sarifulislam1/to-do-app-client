import logo from './logo.svg';
import './App.css';
import NavBar from './component/NavBar/NavBar';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home/Home';
import GoogleLogin from './component/GoogleLogin/GoogleLogin';
import AddTask from './component/AddTask/AddTask';


function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      {/* <Home></Home>s */}
      <Routes>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/signup' element={<GoogleLogin></GoogleLogin>}></Route>
        <Route path='/add-task' element={<AddTask></AddTask>}></Route>
      </Routes>
    </div>
  );
}

export default App;
