import React, { useEffect, useRef, useState } from 'react'
import Draggable from 'react-draggable'

const ProgressPicker = () => {
    const seekbarRef = useRef();

    const [lastUpdate, setLastUpdate] = useState(0)

    const handleCurrentProgress = (e, data) => {
        // console.log(data);
        if(data.x >= 0 && data.x < 113) {
            setLastUpdate(() => 0)
        } else if(data.x >= 113 && data.x < 226) {
            setLastUpdate(() => 113)
        } else if(data.x >= 226 && data.x < 339) {
            setLastUpdate(() => 226)
        } else if(data.x >= 339 && data.x < 450) {
            setLastUpdate(() => 339)
        } else {
            setLastUpdate(() => 451)
        }
    }

    return (
        <div className='w-full my-2 flex flex-col gap-5'>
            <div className=''>
                <p className='font-semibold'>Task Progress</p>
            </div>
            <div ref={seekbarRef} className='w-full h-[6px] bg-yellow-500/90 flex flex-row items-center justify-between rounded-xl'>
                <Draggable
                    onDrag={handleCurrentProgress}
                    axis='x'
                    position={{x: lastUpdate, y: 0}}
                    bounds={{ left: 0, right: 452}}
                >
                    <div className=' h-4 w-4 bg-red-400 absolute rounded-full cursor-pointer'></div>
                </Draggable>
                <div className='w-[4px] h-[8px] bg-blue-500 rounded-3xl'>
                </div>
                <div className='w-[4px] h-[8px] bg-green-500 rounded-3xl'>
                </div>
                <div className='w-[4px] h-[8px] bg-blue-500 rounded-3xl'>
                </div>
                <div className='w-[4px] h-[8px] bg-violet-500 rounded-3xl'>
                </div>
                <div className='w-[4px] h-[8px] bg-blue-500 rounded-3xl'>
                </div>
            </div>
        </div>
    )
}

export default ProgressPicker