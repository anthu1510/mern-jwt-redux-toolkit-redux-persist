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
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                       data-bs-toggle="dropdown" aria-expanded="false">
                                        Aravinth
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                        <li>
                                            <Link className="nav-link" to="/profile">Profile</Link>
                                        </li>
                                        <li>
                                            <Link className="nav-link" to="/change-password">Change Password</Link>
                                        </li>
                                        <li>
                                            <hr className="dropdown-divider" />
                                        </li>
                                        <li>
                                            <a className="nav-link" href="#" onClick={handleLogout}>Logout</a>
                                        </li>
                                    </ul>
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