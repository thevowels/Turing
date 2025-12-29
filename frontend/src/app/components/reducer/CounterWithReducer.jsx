'use client';

import {useReducer} from "react";

function CounterReducer(state, action)
{
    switch (action.type){
        case "INC":
            return {
                count: state.count + 1,
            };
        case "DEC":
            return{
                count: state.count - 1,
            }
        default:
            return {
                ...state,
            }
    }
}
const initState = {
    count: 0,
}
export default  function CounterWithReducer() {
    const [state, dispatch] = useReducer(CounterReducer, initState);
    const incHandler = () => {
        dispatch({
            type: "INC",
        })
    }
    const decHandler = () => {
        dispatch({
            type: "DEC",
        })
    }
    return(
        <div>
            {state.count}
            <br/>
            <button onClick={decHandler}>Decrement</button>
            <button onClick={incHandler}>Increment</button>
        </div>
    )
}