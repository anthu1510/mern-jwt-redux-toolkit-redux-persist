import React from 'react';

const ChangePassword = () => {
    return (
        <div className="col-xxl-4 offset-xxl-4 mt-xxl-5">
            <div className="card">
                <div className="card-header">
                    <div className="card-title">Change Password</div>
                </div>
                <div className="card-body">
                    <form action="">
                        <div className="mb-3">
                            <label>Current Password</label>
                            <input type="password" className="form-control" placeholder="Enter Current Password"/>
                        </div>
                        <div className="mb-3">
                            <label>New Password</label>
                            <input type="password" className="form-control" placeholder="Enter New Password"/>
                        </div>
                        <div className="mb-3">
                            <label>Confirm Password</label>
                            <input type="password" className="form-control" placeholder="Enter Confirm Password"/>
                        </div>
                        <div className="mb-3">
                            <button className="btn btn-outline-primary w-100">Change</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ChangePassword;