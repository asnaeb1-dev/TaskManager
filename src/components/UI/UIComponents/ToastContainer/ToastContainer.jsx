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

export const ToastTypes = {
    INFO: 0,
    SUCCESS: 1,
    ERROR: 2,
    WARNING: 3,
    NOTE: 4
};

const ToastContainer = ({ type = ToastTypes.INFO, message = "Hello World", duration = 1000, onClose, showToast = false }) => {
    const [isHover, setHover] = useState(false);

    const getIcon = type => {
        switch (type) {
            case ToastTypes.INFO:
                return <FaInfo color='white' />;

            case ToastTypes.SUCCESS:
                return <FaCheck color='white' />;

            case ToastTypes.ERROR:
                return <FaTimes color='white' />;

            case ToastTypes.WARNING:
                return <PiWarningCircleFill color='white' />;

            case ToastTypes.NOTE:
                return <FaEdit color='white' />;

            default: 
                return <FaInfo color='white' />;
        }
    }

    const getToastStyles = (type) => {
        switch (type) {
            case ToastTypes.INFO:
                return "bg-blue-500/85";
            case ToastTypes.SUCCESS:
                return "bg-emerald-500/85"
            case ToastTypes.ERROR:
                return "bg-red-500/85";
            case ToastTypes.WARNING:
                return "bg-yellow-400/85"
            case ToastTypes.NOTE:
                return "bg-pink-500/85";
            default:
                return "bg-blue-500/85";
        }
    }

    useEffect(() => {
        setTimeout(() => {
            onClose();
        }, duration = 1000)
    }, [duration])

    const getProgressBarColor = type => {
        switch (type) {
            case ToastTypes.INFO:
                return "bg-blue-600";
            case ToastTypes.SUCCESS:
                return "bg-emerald-600"
            case ToastTypes.ERROR:
                return "bg-red-800";
            case ToastTypes.WARNING:
                return "bg-yellow-600"
            case ToastTypes.NOTE:
                return "bg-pink-600";
        }
    }


    if(!showToast) return;
    return createPortal(
        <div
            onMouseOver={() => setHover(true)}
            onMouseOut={() => setHover(false)}
            className={`w-full h-20 md:w-[350px] fixed ${getToastStyles(type)} z-10 bottom-0 md:top-2 md:right-2 rounded-t-lg md:rounded-lg flex flex-col`}
        >
            <div
                style={isHover ? {animationPlayState: "paused"} : {animationPlayState: "running"}}
                onAnimationEnd={onClose}
                className={`h-2 rounded-t-lg animateToast ${getProgressBarColor(type)}`}
            ></div>
            <div className='flex flex-row items-center h-full w-full px-4 gap-3 pb-[5px]'>
                <span className={`border-2 border-white rounded-full p-1 animate-bounce`}>
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