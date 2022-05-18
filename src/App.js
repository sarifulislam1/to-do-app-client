import logo from './logo.svg';
import './App.css';
import NavBar from './component/NavBar/NavBar';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home/Home';
import GoogleLogin from './component/GoogleLogin/GoogleLogin';
import AddTask from './component/AddTask/AddTask';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';
import AllTask from './component/AllTask/AllTask';


function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      {/* <Home></Home>s */}
      <Routes>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/signup' element={<GoogleLogin></GoogleLogin>}></Route>
        <Route path='/add-task' element={<PrivateRoute>
          <AddTask></AddTask>
        </PrivateRoute>}></Route>
        <Route path='/all-task' element={<PrivateRoute>
          <AllTask></AllTask>
        </PrivateRoute>}></Route>
      </Routes>
    </div>
  );
}

export default App;
