import React, { useEffect, useRef, useState } from 'react'
import { MdCancel } from "react-icons/md";

const TagPicker = ({ updateTagList }) => {

    const [tags, setTags] = useState([]);
    const [isFocused, setFocused] = useState(false);
    const tagInputRef = useRef();
    const [text, setText] = useState("");

    const handleTagSubmit = e => {
        e.preventDefault();
        if(tags.length >= 4) {
            alert("4 tags at max are allowed")
        } else {
            const tagName = e.target.tags.value;
            setTags(tagList  => [...tagList, tagName]);
            updateTagList(tags);
        }
        e.target.reset();
    }

    setTimeout(() => {
        tagInputRef.current.addEventListener("keyup", e =>{
            if (e.key === "Backspace") {
                console.log("hello");
                console.log(text)
            }
        })
    }, 100)


    

    const handleTagRemove = (index) => {
        setTags((tagList) => tagList.filter((_, ind) => ind !== index));
        updateTagList(tags);
    }

    return (
        <div className={`w-full border-b-2  ${isFocused && 'border-yellow-500'} text-yellow-500 flex flex-col gap-2`}>
            <p className='text-black font-semibold'>Task Tags</p>
            <form onSubmit={handleTagSubmit} className=' flex flex-row gap-2 items-center  pb-2'>
                <div className={`flex flex-row gap-2 ${tags?.length === 0 && "hidden"}`}>
                    {
                        tags?.map((tag, index) => {
                            return (
                                <span key={tag} className='bg-yellow-500/50 flex items-center flex-row px-2 py-1 gap-1 text-black rounded-md'>
                                    <p className=' whitespace-nowrap text-ellipsis overflow-hidden'>{tag}</p>
                                    <span onClick={() => handleTagRemove(index)} className='pt-1 cursor-pointer'>
                                        <MdCancel color='white'/>
                                    </span>
                                </span>
                            )
                        })
                    }
                </div>
                <input
                    ref={tagInputRef}
                    onChange={e => setText(e.target.value)}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    className='w-full outline-none'
                    type={"text"}
                    maxLength={10}
                    disabled={tags.length >= 4}
                    placeholder='Tags'
                    name='tags'
                />
            </form>
        </div>
    )
}

export default TagPicker