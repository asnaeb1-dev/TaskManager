import React, { useContext, useEffect, useState, useRef } from 'react'
import { FaClipboardList, FaCalendarTimes, FaCog, FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";

import { APP_DESIGN_COLORS, PATHS } from '../../../data/Utils/Strings';
import { TaskerAppContext } from '../../../data/AppContext/AppContext';
import { AddNotesContextInstance } from '../../../data/AppContext/AddNotesContext';
import { useLocation, useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { logoutUser } from '../../../data/Services/Api';

import "./sidebar.css";

const SideBar = () => {
	const navigate = useNavigate();
	const sidebarRef = useRef();
	const location = useLocation();
	const [isSidebarCollapsed, setSidebarCollapsed] = useState(true);
	const [isMouseHovering, setMouseHovering] = useState(false);
	const { isAddNotesOpen, setAddNotesOpen } = useContext(AddNotesContextInstance);
	const { setShowUserProfile, userDetails } = useContext(TaskerAppContext);

	useEffect(() => {
		if(userDetails) {
			// console.log(userDetails);
		}
	}, [userDetails])

	const buttons = [
		{
			btnTitle: "Add Notes",
			btnPath: "***"
		},{
			btnTitle: "Notes",
			btnPath: "dashboard"
		}, {
			btnTitle: "Timeline",
			btnPath: "timeline"
		}, {
			btnTitle: "Favorites",
			btnPath: "favorites"
		}, {
			btnTitle: "Settings",
			btnPath: "settings"
		}
	];
	
	const getIcons = index => {
		switch (index) {
			case 0:
				return <IoMdAdd size={18} color={APP_DESIGN_COLORS.MAIN_COLOR} />;
			case 1:
				return <FaClipboardList size={18} color={APP_DESIGN_COLORS.MAIN_COLOR} />;
			case 2: 
				return <FaCalendarTimes size={18} color={APP_DESIGN_COLORS.MAIN_COLOR} />;
			case 3:
				return <MdFavorite size={18} color={APP_DESIGN_COLORS.MAIN_COLOR} />
			case 4:
				return <FaCog size={18} color={APP_DESIGN_COLORS.MAIN_COLOR} />;
			case 5:
				return <IoMdAdd size={18} color={APP_DESIGN_COLORS.MAIN_COLOR} />;
			default:
				return;
		}
	}

	const handleSideBarOptionsInteractions = e => {
		const id = e.target.id;
		console.log(id);
		switch (id) {
			case "Add Notes":
				setAddNotesOpen(!isAddNotesOpen)
				return;
			case "Notes":
				navigate(PATHS.DASHBOARD)
				return;
			case "Timeline":
				navigate(PATHS.TIMELINE)
				return;
			case "Favorites":
				navigate(PATHS.FAVOURITES)
				return;
			case "Settings":
				navigate(PATHS.SETTINGS)
                return;
			default:
				return;
		}

	}

	const {
		mutate: logoutMutation,
		isError: logoutHasUser,
		error: logoutError,
		isPending: logoutIsPending
	} = useMutation({
		mutationFn: logoutUser,
		onSuccess: (responseData) => {
			console.log("responseData: ", responseData);
		},
		onError: (err) => {
            console.log(err);
        }
	})

	const handleLogout = () => {
		logoutMutation();
	}

	useEffect(() => {
		if(isSidebarCollapsed) {
			sidebarRef.current.classList.add("animateSlideInSidebar")
		} else {
			sidebarRef.current.classList.add("animateSlideOut");
		}
	}, [isSidebarCollapsed])

	return (
		<div ref={sidebarRef} className={`${isSidebarCollapsed ? "w-[5.3rem]" : "w-[285px]"} bg-white absolute  left-0 bottom-0 h-[calc(100vh_-_4.5rem)] shadow-xl z-[2] py-4`}>
		<div onMouseOver={() => setMouseHovering(true)} onMouseOut={() => setMouseHovering(false)} className='flex w-full h-full flex-col items-start px-4 '>
			<div className='flex-1 w-full'>
				<button title={isSidebarCollapsed ? "Open Sidebar" : "Close Sidebar"} onClick={() => setSidebarCollapsed(!isSidebarCollapsed)} className={`absolute right-[-15px] ${!isMouseHovering && "hidden"} shadow-2xl hover:bg-yellow-500/15 bg-white border-yellow-500 p-2 rounded-2xl`}>
					{isSidebarCollapsed ? <FaChevronRight color={APP_DESIGN_COLORS.MAIN_COLOR} /> : <FaChevronLeft color='rgb(234 179 8)' />}
				</button>
				<div onClick={handleSideBarOptionsInteractions} className=' flex flex-col h-full w-full gap-3 pt-[3rem]'>
					{
						buttons?.map((btn, index) => {
							return (
								<button
									title={btn.btnTitle}
									id={btn.btnTitle}
									key={btn.btnTitle}
									className={`h-10 w-full border-yellow-500 ${location.pathname.substring(1, location.pathname.length) === btn.btnPath && "bg-yellow-500/30"} hover:bg-yellow-500/30 px-4 py-5  ${isSidebarCollapsed && "justify-center"} items-center rounded-lg flex flex-row gap-3 text-yellow-500`}
								>
									{getIcons(index)}
									{ !isSidebarCollapsed ? <p>{btn.btnTitle}</p> : null}
								</button>
							)
						})
					}
				</div>
			</div>
			<div className='flex-1 flex flex-col w-full gap-2'>
			</div>
			<div className='flex-1 flex flex-col justify-end items-start w-full'>
				<div
					title={isSidebarCollapsed && `${userDetails?.displayName}`}
					onClick={() => handleLogout()}
					className='flex flex-row p-2 items-center gap-4 cursor-pointer hover:bg-yellow-500/30 border-yellow-500 w-full rounded-lg'
				>
					<img
						className=' object-cover w-[2.5rem] h-[2.5rem] shadow-2xl rounded-full'
						src='https://gizmodo.com.au/wp-content/uploads/2022/03/02/the-batman-review.jpg?quality=75&w=640&h=360&crop=1'
					/>
					{!isSidebarCollapsed ? <p className=' text-lg font-semibold'>{userDetails?.displayName}</p> : null}
				</div>
			</div>
		</div>
		</div>
	)
}

export default SideBar