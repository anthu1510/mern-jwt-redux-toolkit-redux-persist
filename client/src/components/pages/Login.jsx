import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../redux/reducers/authSlice";

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
      dispatch(userLogin({email, password}));
    }

    return (
        <div className="col-xxl-4 offset-xxl-4 mt-xxl-5">
            <div className="card">
                <div className="card-header">
                    <div className="card-title">Login</div>
                    { auth.isLoggedIn ? navigate("dashboard", { replace: true }) : null}
                </div>
                <div className="card-body">
                    <form onSubmit={handleLogin}>
                        <div className="mb-3">
                            <label>Email</label>
                            <input type="text" onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="Enter Email"/>
                        </div>
                        <div className="mb-3">
                            <label>Password</label>
                            <input type="password" onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder="Enter Password"/>
                        </div>
                        <div className="mb-3">
                            <button disabled={auth.isPendding} className="btn btn-outline-primary w-100">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;