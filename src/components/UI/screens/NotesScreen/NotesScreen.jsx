import { useContext, useEffect, useState } from 'react'
import NotesItem from '../../UIComponents/NotesItem/NotesItem';
import HorizontalCalander from '../../UIComponents/HorizontalCalander/HorizontalCalander';
import { TaskerAppContext } from '../../../data/AppContext/AppContext';
import { useQuery } from '@tanstack/react-query';
import { getTaskFromDB } from '../../../data/Services/Api';
import { STALE_TIME } from '../../../data/Utils/utils';
import { ResponseType, TODO_TYPES } from '../../../data/Utils/Strings';

const NotesScreen = () => {
    const { userDetails } = useContext(TaskerAppContext);
    const [notesList, setNoteList] = useState([]);

    const {
        isLoading: isTaskLoading,
        isError: isTaskError,
        error: taskError,
        data: taskData
    } = useQuery({
        queryKey: ["getTaskQuery"],
        queryFn: () => getTaskFromDB(userDetails?.displayName),
        retryOnMount: true,
        staleTime: STALE_TIME,
        refetchOnReconnect: true
    })

    useEffect(() => {
        console.log("tdata", taskData);
        if(taskData?.responseType === ResponseType.SUCCESS) {
            console.log(taskData?.response?.todos)
            const taskTypes = taskData?.response?.todos;
            setNoteList([
                ...taskTypes.Chore,
            ])
        } else {
            setNoteList([]);
        }
    }, [taskData])

    useEffect(() => {
        console.log("notes list", notesList);
    }, [notesList])

    return (
        <div className='w-[calc(100vw_-_5.3rem)] h-[calc(100vh_-_4rem)] overflow-y-scroll absolute z-[0] right-0 px-4 py-2'>
            <div className='w-full h-20 sticky top-0 bg-white rounded-xl shadow-md'>
                <HorizontalCalander />
            </div>
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
            </div>
        </div>
    )
}

export default NotesScreen