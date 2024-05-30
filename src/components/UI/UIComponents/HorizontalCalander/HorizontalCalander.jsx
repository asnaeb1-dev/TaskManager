import React, { useEffect, useRef, useState } from 'react'
import "./horizontalcalander.css";
import { getDateRange, getDay, getMonth } from '../../../data/Utils/utils';
import { FaAngleLeft, FaAngleRight  } from "react-icons/fa";

const HorizontalCalander = () => {
	const today = new Date();
    const [dateList, setDateList] = useState([]);
    const horizontalRef = useRef();
    const [currentDate, setCurrentDate] = useState(today);

    useEffect(() => {
		const screenWidth = window.innerWidth;
		let diff = 0;
		if(screenWidth > 1600) {
			diff = 10;
		} else if(screenWidth > 1200) {
			diff = 8;
		} else if(screenWidth > 800) {
			diff = 7
		} else if(screenWidth > 600) {
			diff = 5
		}

		const startDate = new Date(new Date().setDate(new Date().getDate() - diff));
		const dateArr = [];
		for(let i = 0;i<20;i++) {
			dateArr.push(new Date(startDate.setDate(startDate.getDate() + 1)));
		}
		setDateList(dateArr)
	}, [])


    const handleDateNext = () => {
        console.log("RIGHT");

		setDateList(dateArr => {
			const tempDateArr = [...dateArr];
			tempDateArr.shift();
			const lastDate = dateList[dateList.length - 1];
			tempDateArr.push(new Date(new Date(lastDate).setDate(new Date(lastDate).getDate() + 1)));
			return tempDateArr;
		});

    }

    const handleDatePrev = () => {
        setDateList(dateArr => {
			const tempDateArr = [...dateArr];
			tempDateArr.pop();
			const firstDate = dateList[0];
			tempDateArr.unshift(new Date(new Date(firstDate).setDate(new Date(firstDate).getDate() - 1)));
			return tempDateArr;
		})

    }

    const handleClick = e => {
        console.log();
    }

    return (
        <div ref={horizontalRef} className='w-full h-full px-4 flex flex-row gap-6 overflow-hidden  rounded-xl py-1 bg-yellow-500/40'>
            {
                dateList?. map((date, index) => {
                    return (
                        <HorizontalCalanderComponent
                            key={index}
                            timePiece={date}
                            handleClick={handleClick}
                            currentDate={currentDate}
                        />)
                })
            }
            <button onClick={handleDatePrev} className="absolute left-[-10px] top-[24px] bg-white border-yellow-500 border-2 rounded-full p-2 z-10 hover:scale-110">
                <FaAngleLeft color='rgb(234 179 8)' />
            </button>

            <button onClick={handleDateNext} className='absolute right-[-10px] top-[24px] border-yellow-500  bg-white border-2 rounded-full p-2 z-10 hover:scale-110'>
                <FaAngleRight  color='rgb(234 179 8)' />
            </button>
        </div>
    )
}

const HorizontalCalanderComponent = ({ timePiece, handleClick, currentDate }) => {
    // console.log(timePiece);
    const d = new Date(timePiece);
    const day = d.getDay();
    const date = d.getDate();
    const month = d.getMonth();

    return(
        <div className={`user-select-none h-full w-20 flex flex-col items-center hover:scale-105 hover:cursor-pointer transition-transform px-2 rounded-2xl hover:bg-yellow-500 ${new Date(currentDate).getDate() === date && "bg-yellow-500 cursor-pointer scale-105"}`}>
            <p className=' text-[12px]'>{getDay(day)}</p>
            <p className=' font-extrabold text-2xl'>{date}</p>
            <p className=' text-[12px]'>{getMonth(month)}</p>
        </div>
    )
}

export default HorizontalCalander