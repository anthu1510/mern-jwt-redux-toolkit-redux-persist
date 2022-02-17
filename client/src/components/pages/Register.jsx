import React from 'react';

const Register = () => {
    return (
        <div className="col-xxl-4 offset-xxl-4 mt-xxl-5">
            <div className="card">
                <div className="card-header">
                    <div className="card-title">Register</div>
                </div>
                <div className="card-body">
                    <form action="">
                        <div className="mb-3">
                            <label>Name</label>
                            <input type="text" className="form-control" placeholder="Enter Name"/>
                        </div>
                        <div className="mb-3">
                            <label>Email</label>
                            <input type="text" className="form-control" placeholder="Enter Email"/>
                        </div>
                        <div className="mb-3">
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Enter Password"/>
                        </div>
                        <div className="mb-3">
                            <button className="btn btn-outline-primary w-100">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;