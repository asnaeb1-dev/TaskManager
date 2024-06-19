import React, { useEffect, useState } from 'react'
import { END_TIME, START_TIME } from '../../../../../data/Utils/Strings'

const DurationPicker = ({ updateTimeDuration }) => {

    const [startTime, setStartTime] = useState();
    const [endTime, setEndTime] = useState();

    useEffect(() => {
        updateTimeDuration({startTime, endTime});
        // console.log(new Date(startTime.time).getTime());
    }, [startTime, endTime])

    return (
        <div className='flex flex-col gap-2 mt-8'>
            <p className=' font-semibold'>Pick task duration</p>
            <div className='flex flex-row gap-3 items-center'>
                <p>{START_TIME}</p>
                <input
                    onChange={e => setStartTime(new Date(e.target.value).setDate(new Date(e.target.value).getDate()))}
                    className={`border-t-2 border-b-2 border-r-[1.25px] border-l-2 rounded-xl px-2 py-1 outline-none text-yellow-500 focus:border-yellow-500`}
                    type={"datetime-local"}
                />
            </div>
            <div className='flex flex-row gap-[17.5px] items-center'>
                <p>{END_TIME}</p>
                <input
                    onChange={e => setEndTime(new Date(e.target.value).setDate(new Date(e.target.value).getDate()))}
                    className={`border-t-2 border-b-2 border-r-[1.25px] border-l-2 rounded-xl px-2 py-1 outline-none text-yellow-500 focus:border-yellow-500`} type={"datetime-local"}  />
            </div>
        </div>
    )
}

export default DurationPicker