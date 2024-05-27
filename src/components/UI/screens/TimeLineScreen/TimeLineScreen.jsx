import React, { useContext, useEffect } from 'react'
import { TaskerAppContext } from '../../../data/AppContext/AppContext';
import { Calendar } from 'antd';
import { FaChevronLeft } from "react-icons/fa";
import TaskDisplay from '../../UIComponents/TaskDisplay/TaskDisplay';

const TimeLineScreen = () => {
    const {setNavBarState} = useContext(TaskerAppContext);
	
	useEffect(() => {
		setNavBarState(1);
	}, [])

    const onPanelChange = (value, mode) => {
        console.log(value, mode);
    };

    const handleDateSelect = (value, mode) => {
        console.log(value, mode);
    };

    return (
        <div className='w-[calc(100vw_-_5.3rem)] h-[calc(100vh_-_4rem)] overflow-y-hidden absolute z-[0] right-0 px-4 py-2'>
            <div className='flex flex-row justify-between items-center'>
                <h1 className=' font-bold text-xl text-yellow-500'>Notes Timeline</h1>
                <button className='rounded-full bg-yellow-500/40 p-1 hover:-translate-x-3 hover:transition-transform' title='Open Task Display'>
                    <FaChevronLeft size={12} color='rgb(234 179 8)' />
                </button>
            </div>
            <div className='w-full flex flex-row gap-4'>
                <div className='w-full h-[calc(100vh_-_7rem)] overflow-y-scroll md:flex-[2] xl:flex-[3] 2xl:flex-[5]'>
                    <Calendar
                        className='h-full'
                        monthCellRender={() =>  <h1>Hello</h1>}
                        onSelect={handleDateSelect}
                        fullscreen={true}
                        onPanelChange={onPanelChange} />
                </div>
                <div className='hidden md:flex flex-1'>
                    <TaskDisplay />
                </div>
            </div>
        </div>
    )
}

export default TimeLineScreen