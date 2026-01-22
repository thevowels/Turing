'use client';

import {useReducer} from "react";

interface  CounterState{
    counter: number,
}
type CounterAction  = {
    type: "INCREMENT" | "DECREMENT" | "RESET",
}
function CounterReducer(state: CounterState, action: CounterAction):CounterState{
    switch (action.type) {
        case "INCREMENT":
            return {
                counter: state.counter + 1,
            }
        case "DECREMENT":
            return{
                counter: state.counter - 1,
            }
        case "RESET":
            return{
                counter:0,
            }
        default:
            return {
                ...state,
            }
    }
}

const initialState:CounterState = {counter: 0};

export default  function CounterWithReducer(){

    const [state,dispatch] = useReducer(CounterReducer, initialState);

    return(
        <div>
            Value: {state.counter}
            <div>
                <button onClick={()=>dispatch({type:"INCREMENT"})}> Increment</button>
                <button onClick={()=>dispatch({type:"DECREMENT"})}> Decrement</button>
                <button onClick={()=>dispatch({type:"RESET"})}> RESET</button>
            </div>
        </div>
    )
}