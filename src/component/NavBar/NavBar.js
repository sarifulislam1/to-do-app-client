import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../Firebase/Firebase.init';


const NavBar = () => {
    const [user, loading, error] = useAuthState(auth);


    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light ">
            <div className="container-fluid">
                <Link to='/' className="navbar-brand text-success" >TO-DO</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to='/home' className="nav-link active text-success" aria-current="page">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/add-task' className="nav-link active text-success" aria-current="page">Add Task</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/all-task' className="nav-link active text-success" aria-current="page">All Task</Link>
                        </li>

                    </ul>
                    <div>
                        {
                            !user ? <Link className="nav-link active text-success" aria-current="page" to="/signup">Sign Up</Link> : <Link onClick={handleSignOut} className="nav-link active text-success" aria-current="page" to="/signup">Sign Out</Link>

                        }
                    </div>
                </div>

            </div>

        </nav>
    );
};

export default NavBar;