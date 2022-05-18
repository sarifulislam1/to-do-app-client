import React from 'react';
import { Card } from 'react-bootstrap';

const Task = ({ task }) => {
    return (
        <div>
            <Card key={task._id} className='p-3 m-3' border="success" style={{ width: '18rem' }}>
                <Card.Header>{task.name}</Card.Header>
                <Card.Body>
                    {/* <Card.Title>Success Card Title</Card.Title> */}
                    <Card.Text>
                        {task.description}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Task;