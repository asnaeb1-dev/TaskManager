import React, { useState } from 'react'
import { APP_DESIGN_COLORS, APP_TITLE } from '../../../data/Utils/Strings'
import { MdDarkMode, MdLightMode } from "react-icons/md";

const NavBar = ({ type = 0 }) => {
    return type === 0 ? <LoginNavBar /> : <DashBoardNavBar />
}

const LoginNavBar = () => {
    const [darkMode, setDarkMode] = useState(false);

    return (
        <nav className={`w-full h-16 p-2 text-2xl font-bold text-yellow-500 flex flex-row fixed z-10`}>
            <div className='flex-1 flex flex-row items-center gap-1'>
                <img width="50" height="30" src="https://img.icons8.com/plasticine/100/apple-notes--v2.png" alt="apple-notes--v2"/>
                <h1>{APP_TITLE}</h1>
            </div>
            <div className='flex-1 flex items-center justify-end'>
                <button className='border-2 border-yellow-500 rounded-full p-1' onClick={() => setDarkMode(!darkMode)}>
                    {darkMode ? <MdLightMode /> : <MdDarkMode />}
                </button>
            </div>
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