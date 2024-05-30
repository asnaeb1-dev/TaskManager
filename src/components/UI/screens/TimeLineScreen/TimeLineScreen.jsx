import React, { useContext, useEffect, useState } from 'react'
import { TaskerAppContext } from '../../../data/AppContext/AppContext';
import { Calendar } from 'antd';
import { FaChevronLeft } from "react-icons/fa";
import TaskDisplay from '../../UIComponents/TaskDisplay/TaskDisplay';
import "./timeline.css";

const TimeLineScreen = () => {
    const [taskDisplayOpen, setTaskDisplayOpen] = useState(false);

    const onPanelChange = (value, mode) => {
        console.log(value, mode);
    };

    const handleDateSelect = (value, mode) => {
        console.log(value, mode);
        
    };

    return (
        <div className='w-[calc(100vw_-_5.3rem)] h-[calc(100vh_-_4rem)] overflow-y-hidden absolute z-[0] right-0 px-4 py-2'>
            <div className='flex flex-row justify-between items-center'>
                <h1 className=' font-bold text-xl md:text-2xl lg:text-3xl text-yellow-500'>Notes Timeline</h1>
                <button onClick={() => setTaskDisplayOpen(!taskDisplayOpen)} className='rounded-full bg-yellow-500/40 p-1 outline-none md:hidden hover:-translate-x-3 hover:transition-transform' title='Open Task Display'>
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
                <div className={`bg-white z-10 right-0 h-[calc(100dvh_-_110px)] min-w-[300px] ${taskDisplayOpen ? "block" : "hidden"} rounded-xl max-w-[calc(100dvw_-_5.4rem)] shadow-2xl absolute md:flex md:static md:shadow-md flex-1`}>
                    <TaskDisplay />
                </div>
            </div>
        </div>
    )
}

export default TimeLineScreen