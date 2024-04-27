import React, { useState } from 'react'
import { FaClipboardList, FaCalendarTimes, FaCog, FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";
import { APP_DESIGN_COLORS } from '../../../data/Utils/Strings';
const SideBar = () => {
	const [isSidebarCollapsed, setSidebarCollapsed] = useState(true);
	const buttons = ["Notes", "Timeline", "Favorites", "Settings"];

	const getIcons = index => {
		switch (index) {
			case 0:
				return <FaClipboardList size={18} color={APP_DESIGN_COLORS.MAIN_COLOR} />;
			case 1: 
				return <FaCalendarTimes size={18} color={APP_DESIGN_COLORS.MAIN_COLOR} />;
			case 2:
				return <MdFavorite size={18} color={APP_DESIGN_COLORS.MAIN_COLOR} />
			case 3:
				return <FaCog size={18} color={APP_DESIGN_COLORS.MAIN_COLOR} />;
			default:
				return;
		}
	}

	return (
		<div className={`${isSidebarCollapsed ? "w-[5.3rem]" : "w-[285px]"} shadow-xl bg-white absolute  left-0 bottom-0 h-[calc(100vh_-_4.5rem)] z-[2] py-4`}>
		<div className='flex w-full h-full flex-col items-start px-4'>
			<div className='flex-1 w-full'>
				<button onClick={() => setSidebarCollapsed(!isSidebarCollapsed)} className=' absolute right-[-15px] shadow-2xl hover:bg-yellow-500/15 bg-white border-2 border-yellow-500 p-2 rounded-2xl'>
					{isSidebarCollapsed ? <FaChevronRight color={APP_DESIGN_COLORS.MAIN_COLOR} /> : <FaChevronLeft color='rgb(234 179 8)' />}
				</button>
				<div className=' flex flex-col h-full w-full gap-5 pt-[3rem]'>
					{
						buttons.map((_, index) => {
							return (
								<button key={_} className={`border-2 h-10 w-full border-yellow-500 hover:bg-yellow-500/10 px-4 py-5  ${isSidebarCollapsed && "justify-center"} items-center rounded-2xl flex flex-row gap-3 text-yellow-500`}>
									{getIcons(index)}
									{ !isSidebarCollapsed ? <p>{_}</p> : null}
								</button>
							)
						})
					}
				</div>
			</div>
			<div className='flex-1 flex flex-col w-full gap-2'>
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