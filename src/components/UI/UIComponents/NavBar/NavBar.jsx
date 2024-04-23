import React, { useState } from 'react'
import { APP_TITLE } from '../../../data/Utils/Strings'
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { FaSearch } from "react-icons/fa";

const NavBar = ({ type = 0 }) => {
    const [darkMode, setDarkMode] = useState(false);
    return type === 0 ? <LoginNavBar darkMode={darkMode} handleDarkMode={() => setDarkMode(!darkMode)} /> : <DashBoardNavBar darkMode={darkMode} handleDarkMode={() => setDarkMode(!darkMode)} />
}

const LoginNavBar = ({ darkMode, handleDarkMode }) => {

    return (
        <nav className={`w-full h-16 p-2 text-2xl font-bold text-yellow-500 flex flex-row fixed z-10`}>
            <div className='flex-1 flex flex-row items-center gap-1'>
                <img width="50" height="30" src="https://img.icons8.com/plasticine/100/apple-notes--v2.png" alt="apple-notes--v2"/>
                <h1>{APP_TITLE}</h1>
            </div>
            <div className='flex-1 flex items-center justify-end'>
                <button className='border-2 border-yellow-500 rounded-full p-1' onClick={() => handleDarkMode()}>
                    {darkMode ? <MdLightMode /> : <MdDarkMode />}
                </button>
            </div>
        </nav>
    )
}

const DashBoardNavBar = ({ darkMode, handleDarkMode }) => {
    const handleSearchSubmit = e => {
        e.preventDefault();
        console.log(e.target.searchitem.value);
    }
    return (
        <nav className={`w-full gap-4 h-16 p-2 text-yellow-500 flex flex-row shadow-md`}>
            <div className='flex-1 flex flex-row items-center gap-1'>
                <img width="50" height="30" src="https://img.icons8.com/plasticine/100/apple-notes--v2.png" alt="apple-notes--v2"/>
                <h1 className='text-2xl font-bold'>{APP_TITLE}</h1>
            </div>
            <div className='flex-1 flex flex-row'>
                {/* Stuff */}
            </div>
            <div className='flex-1 flex items-center justify-end'>
                <form className='w-full' onSubmit={handleSearchSubmit}>
                    <span className='w-full flex flex-row items-center border-2 border-yellow-500 px-3 py-2 rounded-2xl'>
                        <input
                            className='w-full font-normal px-1 outline-none'
                            type={"text"}
                            placeholder='Search task...' 
                            name='searchitem' 
                            spellCheck={true}
                        />
                        <FaSearch size={25} color='rgb(234 179 8)' />
                    </span>
                </form>
            </div>
            <div className='flex items-center justify-end'>
                <button className='border-2 border-yellow-500 rounded-full p-2' onClick={() => handleDarkMode()}>
                    {darkMode ? <MdLightMode size={25} /> : <MdDarkMode size={25} />}
                </button>
            </div>
        </nav>
    )
}

export default NavBar