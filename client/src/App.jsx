import React from 'react';
import { Routes, Route } from "react-router-dom";

import ProductedRoute from "./components/Auth/ProductedRoute";
import Layout from "./components/Layouts/Layout";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Home from "./components/pages/Home";
import Profile from "./components/pages/Profile";
import ChangePassword from "./components/pages/ChangePassword";

const App = () => {
    return (
            <Routes>
                <Route element={ <Layout/> }>
                    <Route path="/" element={ <Login/> } />
                    <Route path="register" element={ <Register/> } />
                    <Route element={ <ProductedRoute/> }>
                        <Route path="dashboard" element={ <Home/> } />
                        <Route path="profile" element={ <Profile/> } />
                        <Route path="change-password" element={ <ChangePassword/> } />
                    </Route>
                </Route>
            </Routes>
    );
};

export default App;