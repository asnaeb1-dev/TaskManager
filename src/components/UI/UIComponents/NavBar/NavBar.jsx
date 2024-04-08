import React from 'react'
import { APP_TITLE } from '../../../data/Utils/Strings'

const NavBar = ({ type = 0 }) => {
    type === 0 ? <LoginNavBar /> : <DashBoardNavBar />
}

const LoginNavBar = () => {
    return (
        <div className='w-full'>
            <h1>{APP_TITLE}</h1>
        </div>
    )
}

const DashBoardNavBar = () => {
    return (
        <div className='w-full'>

        </div>
    )
}

export default NavBar