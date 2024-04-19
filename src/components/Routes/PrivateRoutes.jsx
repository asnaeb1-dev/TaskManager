import React from 'react'
import { Outlet, Navigate } from "react-router-dom";
import { PATHS } from '../data/Utils/Strings';
import { isUserLoggedIn } from '../data/Services/Api';

const PrivateRoutes = () => {
    console.log(isUserLoggedIn());
    const isAuthenticated = false;
    return (
        isAuthenticated ? <Outlet /> : <Navigate to={PATHS.LOGIN_PATH} />
    )
}

export default PrivateRoutes