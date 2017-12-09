import React from 'react';
import { Link } from 'react-router-dom';

class Signup extends React.Component {


    render() {
        return (
            <div className="container">
                <div className='row justify-content-center'>
                    <div className="col-md-6">
                    <h2>Sign Up</h2>
                            <form>
                                <div className='form-group'>
                                    <label>Username</label>
                                    <input type="text" className="form-control" name="username"  placeholder='Username'/>
                                </div>
                                <div className='form-group'>
                                    <label>Password</label>
                                    <input type="password" className="form-control" placeholder='Password' />
                                </div>
                                <div className="form-group">
                                    <Link to="/login" href="/login" className="btn btn-primary">Login</Link>
                                    <button className="btn btn-secondary btn-sign-up">Sign Up</button>
                                </div>
                            </form>
                    </div>
                </div>
            </div>
        );
    }   
}

export default Signup;
