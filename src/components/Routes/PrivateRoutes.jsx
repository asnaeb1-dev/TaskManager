import React, { useContext } from 'react'
import { Outlet, Navigate } from "react-router-dom";
import { PATHS } from '../data/Utils/Strings';

const PrivateRoutes = () => {
    const isAuthenticated = true;
    return (
        isAuthenticated ? <Outlet /> : <Navigate to={PATHS.LOGIN_PATH} />
    )
}

export default PrivateRoutes