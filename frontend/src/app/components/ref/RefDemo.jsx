'use client';

import {useRef, useState} from "react";

export default function RefDemo(props) {

    const [count, setCount] = useState(0);

    let value = useRef(0);
    const Increment = () => {
        setCount(count + 1);
    }

    const IncLocal = () => {
        value.current = value.current + 1;
        console.log(value.current);
    }

    return (
        <div>
            <div>
                Count: {count}
            </div>
            <div>
                Value:
            </div>
            <button onClick={Increment}>Increment</button>
            <br/>
            <button onClick={IncLocal}>IncLocal</button>
            Ref Demo
        </div>
    )
}