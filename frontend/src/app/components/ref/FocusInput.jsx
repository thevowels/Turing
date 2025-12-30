'use client';



import {useRef, useState} from "react";

export default function FocusInput(props){

    const inputRef = useRef(null);
    const [value, setValue] = useState(0);
    const handleFocus = () => {
        inputRef.current.focus();
        setValue(value + 1);
    }
    console.log('Rendering ',  inputRef.current);
    return (
        <div>
            {value}
            <input ref={inputRef} type={'text'}/>
            <button onClick={handleFocus}>Focus</button>
        </div>
    )
}