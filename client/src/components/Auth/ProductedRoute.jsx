import React from 'react';
import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductedRoute = () => {
    const { isLoggedIn } = useSelector(state => state.auth);

    return  isLoggedIn ? <Outlet /> : <Navigate to="/" replace />;
};

export default ProductedRoute;