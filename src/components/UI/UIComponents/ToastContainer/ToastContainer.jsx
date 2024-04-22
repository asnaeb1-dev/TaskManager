import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

import { PiWarningCircleFill } from "react-icons/pi";
import { FaCheck, FaTimes, FaInfo, FaEdit } from "react-icons/fa";

import "./animateToast.css";

/**
 * 
 * @param {*} param0 
 * @returns 
 * type = 0 - information - blue
 * type = 1 - success - green
 * type = 2 - error - red
 * type = 3 - warning - yellow
 * type = 4 - note - pink
 */

const ToastContainer = ({ type = 0, message = "Hello World", duration = 1000, onClose, showToast }) => {
    const [isHover, setHover] = useState(false);

    const getIcon = type => {
        switch (type) {
            case 0:
                return <FaInfo color='white' />
            case 1:
                return <FaCheck color='white' />
            case 2:
                return <FaTimes color='white' />
            case 3:
                return <PiWarningCircleFill color='white' />
            case 4:
                return <FaEdit color='white' />
        }
    }

    const getToastStyles = (type) => {
        switch (type) {
            case 0:
                return "bg-blue-500/85";
            case 1:
                return "bg-emerald-500/85"
            case 2:
                return "bg-red-500/85";
            case 3:
                return "bg-yellow-400/85"
            case 4:
                return "bg-pink-500/85";
        }
    }

    const getToastAnim = type => {
        switch (type) {
            case 0:
                return "animation-bounce";
            case 1:
                return "animate-bounce	"
            case 2:
                return "animate-pulse";
            case 3:
                return "bg-yellow-400/85"
            case 4:
                return "bg-pink-500/85";
        }
    }

    const getProgressBarColor = type => {
        switch (type) {
            case 0:
                return "bg-blue-600";
            case 1:
                return "bg-emerald-600"
            case 2:
                return "bg-red-800";
            case 3:
                return "bg-yellow-600"
            case 4:
                return "bg-pink-600";
        }
    }


    if(!showToast) return;
    return createPortal(
        <div onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)} className={`w-full h-20 md:w-[350px] fixed ${getToastStyles(type)} z-10 bottom-0 md:top-2 md:right-2 rounded-t-lg md:rounded-lg flex flex-col`}>
            <div id='pb' style={isHover ? {animationPlayState: "paused"} : {animationPlayState: "running"}} onAnimationEnd={onClose} className={`h-2 rounded-t-lg animateToast ${getProgressBarColor(type)}`} ></div>
            <div className='flex flex-row items-center h-full w-full px-2 gap-2'>
                <span className={`border-2 border-white rounded-full p-1 ${getToastAnim(type)}`}>
                    { getIcon(type) }
                </span>
                <div className='text-white text-md overflow-hidden text-ellipsis whitespace-nowrap'>
                    {message}
                </div>
            </div>
        </div>
    , document.getElementById("toast-portal"))
}


export default ToastContainer