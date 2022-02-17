import React, {Fragment} from 'react';
import { Outlet, Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLogOut } from "../../redux/reducers/authSlice";

const Layout = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);

    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(setLogOut());
        navigate("/", { replace: true });
    }

    return (
        <Fragment>
            <nav className="navbar navbar-expand-sm bg-dark">
                <div className="container-fluid">
                    {
                        auth.isLoggedIn
                            ?
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link className="nav-link active" to="/dashboard">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/profile">Profile</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/change-password">Change Password</Link>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#" onClick={handleLogout}>Logout</a>
                                    </li>
                                </ul>
                            :
                                <ul className="navbar-nav ms-auto">
                                    <li className="nav-item">
                                        <Link className="nav-link active" to="/register">Register</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/">Login</Link>
                                    </li>
                                </ul>
                    }


                </div>
            </nav>
            <div className="container">
                <div className="row">
                    <Outlet />
                </div>
            </div>
        </Fragment>
    );
};

export default Layout;