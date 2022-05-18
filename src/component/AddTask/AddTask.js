import React, { useState } from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';

const AddTask = () => {
    const [isReload, setIsReload] = useState(false)
    const handleTask = (e) => {
        e.preventDefault();
        const name = e.target.name.value

        const description = e.target.description.value
        console.log(name, description);


        fetch('http://localhost:4000/addTask', {
            method: 'POST',
            headers: {

                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                name, description
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                e.target.reset('')
                alert('Task added')
                setIsReload(!isReload)
            });

    }


    return (
        <div className='mt-5'>
            <form onSubmit={handleTask}>

                <InputGroup className="mb-3 w-50 mx-auto">
                    <InputGroup.Text id="basic-addon1">Name</InputGroup.Text>
                    <FormControl
                        placeholder="Name"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        name='name'
                    />
                </InputGroup>
                <InputGroup className='w-50 mx-auto'>
                    <InputGroup.Text>Description</InputGroup.Text>
                    <FormControl name='description' as="textarea" aria-label="With textarea" />
                </InputGroup>
                <input className='btn btn-success m-3 p-2' type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default AddTask;