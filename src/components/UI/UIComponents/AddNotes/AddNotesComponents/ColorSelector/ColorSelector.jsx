import { useEffect } from "react";
import { NOTES_COLOR, SELECT_NOTES_COLOR } from "../../../../../data/Utils/Strings";

import { IoMdCheckmark } from "react-icons/io";
import { RiShuffleFill } from "react-icons/ri";

const ColorSelector = ({ handleColorSelect, colorSelected }) => {
    useEffect(() => {   
        console.log(colorSelected);
    }, [colorSelected])
    return (
        <div className='flex w-full h-[10vh] flex-col items-center gap-2'>
            <p className="w-full text-left font-semibold">{SELECT_NOTES_COLOR}</p>
            <div onClick={e => e.target.id && handleColorSelect(e.target.id)} className='w-full h-7 grid grid-cols-9 gap-2'>
                {
                    NOTES_COLOR.map((color, index) => {
                        return (
                            <button
                                key={color}
                                id={`${color}`}
                                style={{ background: color }}
                                className={` w-8 h-8 ${colorSelected === color ? " scale-125": ""} flex outline-none items-center justify-center rounded-full`}
                                type={"button"}
                                role={"button"}
                            >
                                {
                                    colorSelected === color ?
                                        <IoMdCheckmark size={15} color={"black"} />:
                                        null
                                }
                            </button>
                        )
                    })
                }
                <button
                    onClick={() => handleColorSelect(NOTES_COLOR[Math.floor(Math.random() * NOTES_COLOR.length)]) }
                    className={` w-8 h-8 flex outline-none bg-yellow-500/40 items-center justify-center rounded-full`}
                    type={"button"}
                    role={"button"}
                >
                   <RiShuffleFill />
                </button>
            </div>
        </div>
    )
}

export default ColorSelector;