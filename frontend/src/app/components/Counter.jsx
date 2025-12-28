'use client';
import {useState} from "react";

export default  function Counter(props){
    const [value, setValue]  = useState(0);
    return (
        <div>
            Value: {value}
            <br/>
            <button onClick={() => setValue(value => value + 1)}>Increment</button>
        </div>
    )
}