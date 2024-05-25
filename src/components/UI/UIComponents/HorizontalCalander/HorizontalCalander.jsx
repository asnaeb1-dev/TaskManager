import React, { useEffect, useState } from 'react'
import "./horizontalcalander.css";

const HorizontalCalander = () => {
    const today = new Date();
    const [dateArray, setDateArray] = useState([]);
    
    const [startDate] = useState(today.getDate() - 5);
    const [endDate] = useState(today.getDate() + 5);
    useEffect(() => {
       
    }, [today])

    return (
        <div className='w-full h-full px-4 flex flex-row gap-6 overflow-hidden  rounded-xl p-1 bg-yellow-500/40'>
            {
                [...new Array(11)]. map((_, index) => {
                    return (
                        <HorizontalCalanderComponent
                        />)
                })
            }
        </div>
    )
}

const HorizontalCalanderComponent = ({ date = 25, day = "Sunday", month = "December" }) => {
    return(
        <div className=' user-select-none h-full  w-20 flex flex-col items-center hover:scale-105 hover:cursor-pointer transition-transform px-2 rounded-2xl hover:bg-yellow-500 '>
            <p className=' text-[12px]'>{day}</p>
            <p className=' font-extrabold text-2xl'>{date}</p>
            <p className=' text-[12px]'>{month}</p>
        </div>
    )
}

export default HorizontalCalander