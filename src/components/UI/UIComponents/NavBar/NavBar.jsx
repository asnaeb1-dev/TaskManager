import React from 'react'
import { APP_DESIGN_COLORS, APP_TITLE } from '../../../data/Utils/Strings'

const NavBar = ({ type = 0 }) => {
    return type === 0 ? <LoginNavBar /> : <DashBoardNavBar />
}

const LoginNavBar = () => {
    return (
        <nav className={`w-full h-16 p-2 text-2xl font-bold text-indigo-600 text-re`}>
            <h1>{APP_TITLE}</h1>
        </nav>
    )
}

const DashBoardNavBar = () => {
    return (
        <div className='w-full'>

        </div>
    )
}

export default NavBar