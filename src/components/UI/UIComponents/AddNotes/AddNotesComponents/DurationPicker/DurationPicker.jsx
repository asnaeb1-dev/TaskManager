import React, { useEffect, useState } from 'react'
import { END_TIME, START_TIME } from '../../../../../data/Utils/Strings'

const DurationPicker = ({ updateTimeDuration }) => {

    const [startTime, setStartTime] = useState({
        time: "",
        date: ""
    });

    const [endTime, setEndTime] = useState({
        time: "",
        date: ""
    });

    useEffect(() => {
        updateTimeDuration({startTime, endTime});
    }, [startTime, endTime])

    return (
        <div className='flex flex-col gap-2 mt-8'>
            <p className=' font-semibold'>Pick task duration</p>
            <div className='flex flex-row gap-3 items-center'>
                <p>{START_TIME}</p>
                <div className='flex flex-row'>
                    <input onChange={e => setStartTime({...startTime, time: e.target.value})} className={`border-t-2 border-b-2 border-r-[1.25px] border-l-2 rounded-l-xl px-2 py-1 outline-none text-yellow-500 focus:border-yellow-500`} type={"time"} placeholder='00:00' />
                    <input onChange={e => setStartTime({...startTime, date: e.target.value})} className={`border-t-2 border-b-2 border-l-[1.25px] border-r-2 px-2 py-1 rounded-r-xl outline-none text-yellow-500 focus:border-yellow-500 `} type={"date"} placeholder='dd:mm:yy' />
                </div>
            </div>
            <div className='flex flex-row gap-[17.5px] items-center'>
                <p>{END_TIME}</p>
                <div className='flex flex-row'>
                    <input onChange={e => setEndTime({...endTime, time: e.target.value})} className={`border-t-2 border-b-2 border-r-[1.25px] border-l-2 rounded-l-xl px-2 py-1 outline-none text-yellow-500 focus:border-yellow-500`} type={"time"} placeholder='00:00' />
                    <input onChange={e => setEndTime({...endTime, date: e.target.value})} className={`border-t-2 border-b-2 border-l-[1.25px] border-r-2 px-2 py-1 rounded-r-xl outline-none text-yellow-500 focus:border-yellow-500 `} type={"date"} placeholder='dd:mm:yy' />
                </div>
            </div>
        </div>
    )
}

export default DurationPicker