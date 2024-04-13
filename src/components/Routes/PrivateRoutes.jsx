import React from 'react'
import { Outlet, Navigate } from "react-router-dom";
import { PATHS } from '../data/Utils/Strings';

const PrivateRoutes = ({ isAuthenticate = false }) => {
    return (
        isAuthenticate ? <Outlet /> : <Navigate to={PATHS.LOGIN_PATH} />
    )
}

export default PrivateRoutes