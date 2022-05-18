import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import Task from './Task';

const AllTask = () => {
    const [task, setTask] = useState([])

    fetch('http://localhost:4000/addTask')
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
                {/* <Card border="success" style={{ width: '18rem' }}>
                    <Card.Header>{task.name}</Card.Header>
                    <Card.Body>
                        <Card.Title>Success Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk
                            of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card> */}
            </div>
        </div>
    );
};

export default AllTask;