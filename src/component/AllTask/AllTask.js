import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../Firebase/Firebase.init';
import Task from './Task';

const AllTask = () => {
    const [task, setTask] = useState([])
    // const [user] = useAuthState(auth);
    const navigate = useNavigate()

    const addtaskhandle = () => {
        navigate('/add-task')
    }

    //  https://pacific-atoll-80768.herokuapp.com/
    fetch('https://pacific-atoll-80768.herokuapp.com/addTask')
        .then(res => res.json())
        .then(data => setTask(data))



    return (
        <div>
            <div>
                <h3 className='text-success mt-5'>Total Task Available : {task.length}</h3>


                <div className='container row mx-auto p-2'>
                    <div className='row row-cols-lg-3 col-sm-12 mx-auto p-3 g-2'>
                        {
                            task.map(task => <Task
                                task={task}
                                key={task._id}
                            ></Task>)
                        }
                    </div>
                </div>

            </div>
            <button onClick={addtaskhandle} className='btn btn-success'>Add Task</button>
        </div>
    );
};

export default AllTask;