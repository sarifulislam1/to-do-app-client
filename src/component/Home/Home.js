import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate()
    const handleAddTaskBtn = () => {
        navigate('/add-task')
    }
    return (
        <div className='row align-items-center container mx-auto mt-5 p-4'>
            <div className='col-lg-6 col-sm-3 text-start text-success'>
                <h1>Hey! Whats Up?</h1>
                <h3>Welcome to our website .</h3>
                <p>Add your task on this website. It will help you for more hard work and make your life easy</p>

            </div>
            <div className='col-lg-6 col-sm-3 mx-auto p-2'>
                <img className=' img-fluid  rounded-pill ' src="https://productivemuslim.com/wp-content/uploads/2012/11/11-12-list-800px.png" alt="" />
            </div>
            <button onClick={handleAddTaskBtn} className='btn btn-success w-50 mx-auto mt-4'>Add Task</button>
        </div>
    );
};

export default Home;