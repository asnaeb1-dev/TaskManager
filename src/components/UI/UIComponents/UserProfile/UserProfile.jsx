import React, { useContext, useState } from 'react'
import { createPortal } from 'react-dom'
import { TaskerAppContext } from '../../../data/AppContext/AppContext';

import { FaPen } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { APP_DESIGN_COLORS } from '../../../data/Utils/Strings';

const UserProfile = () => {
    const {showUserProfile, setShowUserProfile} = useContext(TaskerAppContext);

    if(!showUserProfile) return null;
    return createPortal(
        <div className='absolute inset-0 w-full bg-black/40 h-full z-10 flex bg- justify-center items-center'>
            <div className=' w-full h-full xl:w-4/5 xl:h-4/5 z-20 bg-white rounded-xl p-4 flex flex-row gap-2'>
                <span onClick={() => setTimeout(setShowUserProfile(false), 200)} className='bg-white cursor-pointer border-2 hover:border-yellow-500 p-1 rounded-full absolute z-40 top-16 right-[13rem]'>
                    <RxCross1 color={APP_DESIGN_COLORS.MAIN_COLOR} size={18} />
                </span>
                <div className='flex-1'>
                    <UserDetailsCard />
                </div>
                <div className='flex-[2] flex flex-col  gap-2'>
                    <TaskDetailsCard />
                    <div className='flex flex-[2] bg-blue-500'>

                    </div>
                </div>
            </div>
        </div>,
        document.getElementById('user-profile-portal')
    )
}

const UserDetailsCard = () => {
    return (
        <div className='flex flex-col p-4 gap-2 h-full border-2  rounded-2xl shadow-2xl'>
            <div className='w-full flex-row flex justify-center'>
                <span className=' w-28 shadow-lg border-2 rounded-full flex items-center justify-center'>
                    <img
                        className=' w-28 h-28 object-fill rounded-full '
                        src="https://cdn.britannica.com/49/127649-050-31417AF3/Heath-Ledger-Joker-Christian-Bale-The-Dark-Knight-2008.jpg"
                        alt="profile-picture"
                    />
                    <span className=' absolute'>
                        <FaPen color='rgb(234 179 8)' />
                    </span>
                </span>
            </div>
            <div className='flex flex-col gap-1'>
                <p className='text-center font-semibold text-xl cursor-pointer'>Abhigyan Raha</p>
                <p className='text-center text-gray-500 text-sm cursor-pointer'>abhigyanraha76@gmail.com</p>
            </div>
        </div>
    )
}

const TaskDetailsCard = () => {

    const [cardDetails] = useState([
        ...new Array(5)
    ])

    return (
        <div className='flex flex-1 flex-row gap-4 px-4 overflow-x-auto rounded-2xl'>
            {
                cardDetails?.map((card, index) => {
                    return (
                        <div className=' w-60 h-full bg-red-500 rounded-xl'>

                        </div>
                    )
                })
            }
        </div>
    )
}

export default UserProfile