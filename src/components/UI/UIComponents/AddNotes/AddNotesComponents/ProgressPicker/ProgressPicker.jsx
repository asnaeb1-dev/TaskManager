import React, { useEffect, useRef, useState } from 'react'
import Draggable from 'react-draggable'
import { PROGRESS_TASK, TaskProgressState } from '../../../../../data/Utils/Strings';

const ProgressPicker = ({ currentProgress = 0, setCurrentProgress}) => {
    const seekbarRef = useRef();
    const [seekbarWidth, setSeekbarWidth] = useState(0)
    const [progress, setProgress] = useState(0)
    const [progressState, setProgressState] = useState()
    const handleCurrentProgress = (e, data) => {
        setProgress(Math.floor((data.x / seekbarWidth) * 100) + 5);
    }

    useEffect(() => {
        if(progress === 0) {
            setProgressState(0);
        }
        if(progress > 0) {
            setProgressState(1);
        }
        if(progress >= 100) {
            setProgressState(2);
        }

        // setCurrentProgress({
        //     progress,
        //     progressState,
        // })
    }, [progress])

    useEffect(() => {
        console.log(seekbarRef.current.getBoundingClientRect());
        setSeekbarWidth(seekbarRef.current.getBoundingClientRect().width)
    }, [seekbarRef])

    return (
        <div className='w-full my-2 flex flex-col gap-5'>
            <div className='flex flex-row gap-2'>
                <p className='font-semibold'>{PROGRESS_TASK}</p>
                <p className=' text-[13px] text-yellow-500 font-semibold'>
                    {progress}% - {progressState === TaskProgressState.NOT_STARTED ? "Not Started" : progressState === TaskProgressState.IN_PROGRESS ? "In Progress" : "Completed" }
                </p>
            </div>
            <div ref={seekbarRef} className='w-full h-[6px] bg-yellow-500/60 flex flex-row items-center justify-between rounded-xl'>
                <Draggable
                    onDrag={handleCurrentProgress}
                    axis='x'
                    bounds={{ left: 0, right: seekbarWidth - 20}}
                >
                    <div className=' h-[1.2rem] w-[1.2rem] bg-red-400 rounded-full cursor-pointer'></div>
                </Draggable>
                
            </div>
        </div>
    )
}

export default ProgressPicker