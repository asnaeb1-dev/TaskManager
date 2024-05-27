import React from 'react'

const TaskDisplay = ({ tasks = [], currentDate }) => {
    return (
        <div className='flex flex-col w-full h-full gap-4 p-2'>
            <div className='w-full'>
                <h1 className='font-bold '>Mon, May 27</h1>
            </div>
            <div className='grid grid-cols-1 gap-3 h-[calc(100vh_-_11rem)] overflow-y-auto'>
            {
                tasks?.length !== 0 ?
                tasks?.map(() => {
                    return (
                        <TaskDisplayItem />
                    )
                }):
                null
            }
            </div>
        </div>
    )
}

const TaskDisplayItem = () => {
    return (
        <div className='flex flex-row h-14 rounded-md gap-3 hover:bg-yellow-500/30 hover:-translate-x-1 hover:transition-transform cursor-pointer'>
            <div className='w-[10px] h-full bg-red-400 rounded-tl-md rounded-bl-md'></div>
            <div className='flex flex-col justify-around text-sm'>
                <p title='Start time'>8:30 PM</p>
                <p title='Duration'>30 mins</p>
            </div>
            <div className=' font-semibold text-lg'>
                <p>This is a task</p>
            </div>
        </div>
    )
}

export default TaskDisplay