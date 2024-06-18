import { useContext, useEffect, useState } from 'react'
import { TaskerAppContext } from '../../../data/AppContext/AppContext';
import { useQuery } from '@tanstack/react-query';
import { getTaskFromDB, getTaskFromDBPaginate } from '../../../data/Services/Api';
import { STALE_TIME } from '../../../data/Utils/utils';
import { ResponseType } from '../../../data/Utils/Strings';

import Loader from '../../UIComponents/Loader/Loader';
import NotesItem from '../../UIComponents/NotesItem/NotesItem';
import HorizontalCalander from '../../UIComponents/HorizontalCalander/HorizontalCalander';
import ToastContainer, { ToastTypes } from '../../UIComponents/ToastContainer/ToastContainer';
import { message } from 'antd';

const NotesScreen = () => {
    const { userDetails } = useContext(TaskerAppContext);
    const [notesList, setNoteList] = useState([]);
    const [isQueryEnabled, setQueryEnabled] = useState(false);
    const [showErrorToast, setErrorToast] = useState(false);
    const [toastDetails, setToastDetails] = useState({
        message: "",
        type: ToastTypes.ERROR,
        duration: 3000,
    });

    const {
        isLoading: isTaskLoading,
        isError: isTaskError,
        error: taskError,
        data: taskData
    } = useQuery({
        queryKey: ["getTaskQuery"],
        queryFn: () => getTaskFromDBPaginate(userDetails?.displayName),
        retryOnMount: true,
        enabled: isQueryEnabled,
        staleTime: STALE_TIME,
        refetchOnReconnect: true,
    });

    useEffect(() => {
        if(userDetails?.displayName) {
            setQueryEnabled(true);
        }
    }, [userDetails])

    useEffect(() => {
        console.log("tdata", taskData);
        if(taskData?.responseType === ResponseType.SUCCESS) {
            console.log(taskData?.response?.todos)
            const taskTypes = taskData?.response?.todos;
            setNoteList([
                ...taskTypes.Chore,
            ])
        } else if(taskData?.responseType === ResponseType.ERROR) {
            setErrorToast(true);
            setToastDetails({
                type: ToastTypes.ERROR,
                message: "Failed to fetch tasks.",
                duration: 3000
            })
        }
    }, [taskData])

    return (
        <div className='w-[calc(100vw_-_5.3rem)] h-[calc(100vh_-_4rem)] overflow-y-scroll absolute z-[0] right-0 px-4 py-2'>
            <div className='w-full h-20 sticky top-0 bg-white rounded-xl shadow-md'>
                <HorizontalCalander />
            </div>
            <ToastContainer
                showToast={showErrorToast}
                type={toastDetails.type}
                message={toastDetails.message}
            />
            {
                notesList?.length > 0 ?
                <div role='notesgrid' className='grid grid-cols-1 pt-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 2xl:grid-cols-5'>
                    {
                        notesList?.map((note, index) => {
                            return (
                                <NotesItem
                                    index={index % 5}
                                    key={note.id}
                                    notesProps={note}
                                />
                            )
                        })
                    }
                </div>:
                <div className='w-full h-full flex justify-center items-center'>
                    <Loader isLoading={isTaskLoading} loadingMessage={"Loading tasks..."} />
                </div>
            }
        </div>
    )
}

export default NotesScreen