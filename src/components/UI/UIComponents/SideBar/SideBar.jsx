import React, { useState } from 'react'
import { FaClipboardList, FaCalendarTimes, FaCog, FaChevronRight, FaChevronLeft } from "react-icons/fa";

const SideBar = () => {
	const [isSidebarCollapsed, setSidebarCollapsed] = useState(true);
	return (
		<div className={`${isSidebarCollapsed ? "w-18" : "w-[285px]"} shadow-xl bg-white absolute left-0 bottom-0 h-[calc(100vh_-_4.5rem)] py-4`}>
		<div className='flex w-full h-full flex-col items-start px-4'>
			<div className='flex-1'>
				<button onClick={() => setSidebarCollapsed(!isSidebarCollapsed)} className=' absolute right-[-15px] shadow-2xl bg-white border-2 border-yellow-500 p-2 rounded-2xl'>
					{isSidebarCollapsed ? <FaChevronRight color='rgb(234 179 8)' /> : <FaChevronLeft color='rgb(234 179 8)' />}
				</button>
			</div>
			<div className='flex-1 flex flex-col w-full gap-2'>
				<button className={`border-2 h-10 w-full border-yellow-500 hover:bg-yellow-500/10 py-2 px-3 items-center rounded-2xl flex flex-row gap-3 text-yellow-500`}>
					<FaClipboardList size={18} color='rgb(234 179 8)' />
					{ !isSidebarCollapsed ? <p>Notes & Tasks</p> : null}
				</button>
				<button className='border-2 h-10 w-full border-yellow-500 hover:bg-yellow-500/10 py-2 px-3 items-center rounded-2xl flex flex-row gap-3 text-yellow-500'>
					<FaCalendarTimes size={18} color='rgb(234 179 8)' />
					{!isSidebarCollapsed ? <p>TimeLine</p> : null}
				</button>
				<button className='border-2 h-10 w-full border-yellow-500 hover:bg-yellow-500/10 py-2 px-3 items-center rounded-2xl flex flex-row gap-3 text-yellow-500'>
					<FaCog size={20} color='rgb(234 179 8)' />
					{!isSidebarCollapsed ? <p>Settings</p> : null}
				</button>
			</div>
			<div className='flex-1 flex flex-col justify-end items-start w-full'>
				<div className='flex flex-row items-center gap-1 border-2 hover:bg-yellow-500/10 border-yellow-500 w-full rounded-2xl'>
					<img
						className=' object-contain w-12 h-12 shadow-2xl rounded-full'
						src='https://static.vecteezy.com/system/resources/previews/018/765/757/original/user-profile-icon-in-flat-style-member-avatar-illustration-on-isolated-background-human-permission-sign-business-concept-vector.jpg'
					/>
					{!isSidebarCollapsed ? <p>Abhigyan Raha</p> : null}
				</div>
			</div>
		</div>
		</div>
	)
}

export default SideBar