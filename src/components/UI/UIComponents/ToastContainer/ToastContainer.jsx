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

    useEffect(() => {
        let timer;
        if(!isHover) {
            timer = setTimeout(() => {
                // onClose();
            }, document.getElementById("pb").clientWidth / )
        } else {
            clearTimeout(timer);
        }   
        return () => setTimeout(timer);
    }, [duration])

    if(!showToast) return;
    return createPortal(
        <div onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)} className={`w-full h-20 fixed ${getToastStyles(type)}  z-10 bottom-0 rounded-t-lg flex flex-col`}>
            <div id='pb' style={isHover ? {animationPlayState: "paused"} : {animationPlayState: "running"}} className={`bg-red-900 h-2 rounded-t-lg animateToast`}></div>
            <div className='flex flex-row items-center h-full w-full px-2 gap-4'>
                <span className={`border-2 border-white rounded-full p-1 ${getToastAnim(type)}`}>
                    { getIcon(type) }
                </span>
                <div className='text-white overflow-hidden text-ellipsis whitespace-nowrap'>
                    {message}
                </div>
            </div>
        </div>
    , document.getElementById("toast-portal"))
}


export default ToastContainer