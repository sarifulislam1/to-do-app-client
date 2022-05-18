
import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../Firebase/Firebase.init';

const Task = ({ task }) => {
    const navigate = useNavigate()
    const [user] = useAuthState(auth);
    const [isReload, setIsReload] = useState(false);

    const handleDelete = (id) => {
        const confirm = window.confirm('are you sure you want to delete this task')

        if (confirm && user) {
            fetch(`https://pacific-atoll-80768.herokuapp.com/${id}`, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    setIsReload(!isReload);

                });
            navigate('/add-task')
        }



    };

    return (
        <div>
            <Card key={task._id} className='p-3 m-3' border="success" style={{ height: '300px' }} >
                <Card.Header className='text-success'>{task.name}</Card.Header>
                <Card.Body>
                    {/* <Card.Title>Success Card Title</Card.Title> */}
                    <Card.Text className='text-success' title={task.description}>
                        {task.description.slice(0, 190)}
                    </Card.Text>
                </Card.Body>
                <Button onClick={() => handleDelete(task._id)} className=' btn-danger m-2'>Delete</Button>
            </Card>

        </div>
    );
};

export default Task;