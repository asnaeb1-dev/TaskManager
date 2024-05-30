import React, { useState } from 'react'
import EmptySVG from "../../../../assets/empty.svg";
import { getDay, getMonth } from '../../../data/Utils/utils';
import { EMPTY_NOTES } from '../../../data/Utils/Strings';
import { MdDelete } from "react-icons/md";

const TaskDisplay = ({ tasks = [...new Array(40)], currentDate = new Date() }) => {
    return (
        <div className='flex flex-col w-full h-full gap-4 p-2'>
            <div className='w-full'>
                <h1 className='font-bold '>{getDay(currentDate.getDay())}, {currentDate.getDate()} {getMonth(currentDate.getMonth())}</h1>
            </div>
            <div className='grid grid-cols-1 gap-3 h-[calc(100vh_-_11rem)] overflow-y-auto'>
            {
                tasks?.length !== 0 ?
                tasks?.map(() => {
                    return (
                        <TaskDisplayItem deleteTask={() => alert("you sure?")} />
                    )
                }):
                <div className='flex justify-center gap-4 items-center flex-col'>
                    <img className=' w-40' src={EmptySVG} />
                    <p>{EMPTY_NOTES}</p>
                </div>
            }
            </div>
        </div>
    )
}

const TaskDisplayItem = ({ deleteTask, task }) => {
    const [mouseHover, setMouseHover] = useState(false);
    return (
        <div onMouseOver={() => setMouseHover(true)} onMouseOut={() => setMouseHover(false)} className='flex flex-row h-14 rounded-md gap-3 hover:bg-yellow-500/30 hover:-translate-x-1 hover:transition-transform cursor-pointer'>
            <div className='w-[10px] h-full bg-red-400 rounded-tl-md rounded-bl-md'></div>
            <div className='flex flex-col justify-around text-sm'>
                <p title='Start time'>8:30 PM</p>
                <p title='Duration'>30 mins</p>
            </div>
            <div className=' font-semibold text-lg flex-1'>
                <p>This is a task</p>
            </div>
            <div onClick={() => deleteTask()} className={`flex-col ${mouseHover ? "flex" : "hidden"} hover:scale-110 justify-center pr-2`}>
                <MdDelete size={20} color='red' />
            </div>
        </div>
    )
}

export default TaskDisplay