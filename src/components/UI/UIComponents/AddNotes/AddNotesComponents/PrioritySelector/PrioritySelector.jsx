import { useEffect, useState } from "react";
import { IoIosFlag } from "react-icons/io";
import { TaskPriority } from "../../../../../data/Utils/Strings";

const PrioritySelector = ({ taskPriority, setTaskPriority}) => {

    /**
     * PRIORITY:
     * 1) low
     * 2) medium
     * 3) high
     */
    const [selected, setSelected] = useState(taskPriority)

    const handleButtonSelect = e => {
        const id = e.target.id;
        if(id) {
            setSelected(id)
        }
    }

    useEffect(() => {
        setTaskPriority(selected);
    }, [selected])

    return (
        <div className="flex flex-col gap-2">
            <p className=" font-semibold">Select task priority</p>
            <div onClick={e => handleButtonSelect(e)} className='flex flex-row w-full gap-2'>
                <button
                    id={TaskPriority.HIGH}
                    className={`${selected === TaskPriority.HIGH ? "bg-red-500/80 text-white": "bg-white text-red-500"}  flex border-red-500/80 flex-1 flex-row outline-none border-2 rounded-lg items-center px-2 py-1 gap-3 hover:shadow-xl`}
                    type={"button"}
                >
                    <IoIosFlag size={20} color={`${selected === TaskPriority.HIGH ? "white" :"rgba(239 68 68)"}`} />
                    <p id={TaskPriority.HIGH}>Important</p>
                </button>
                <button
                    id={TaskPriority.MEDIUM}
                    className={` ${selected === TaskPriority.MEDIUM ? " bg-blue-500/80 text-white": "bg-white text-blue-500"} flex border-blue-500 outline-none flex-1 flex-row border-2 rounded-lg items-center px-2 py-1 gap-3 hover:shadow-xl`}
                    type={"button"}
                >
                    <IoIosFlag size={20} color={`${selected === TaskPriority.MEDIUM ? "white" :"rgb(59 130 246)"}`} />
                    <p id={TaskPriority.MEDIUM}>Prioritize</p>
                </button>
                <button
                    id={TaskPriority.LOW}
                    className={` ${selected === TaskPriority.LOW ? " bg-green-500/80 text-white": "bg-white text-green-500"} flex flex-1 border-green-500/80 flex-row border-2 rounded-lg items-center px-2 py-1 gap-3 outline-none hover:shadow-xl`}
                    type={"button"}
                >
                    <IoIosFlag size={20} color={`${selected === TaskPriority.LOW ? "white" :"rgb(34 197 94)"}`} />
                    <p id={TaskPriority.LOW}>Casual</p>
                </button>
            </div>
        </div>
    )
}

export default PrioritySelector;