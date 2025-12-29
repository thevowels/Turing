'use client';

import {useReducer} from "react";
import TodoList from "@/app/components/TodoList";

const todos = [
    {
        id: 1,
        title: "Task 1",
    },
    {
        id: 2,
        title: "Task 2",
    },
    {
        id: 3,
        title: "Task 3",
    },
    {
        id: 4,
        title: "Task 4",
    }
]
export function todoReducer(state, action)
{
    switch(action.type)
    {
        case 'ADD_TODO':
            return [...state, action.payload];
        case 'DELETE_TODO':
            return state.filter(todo => todo.id !== action.payload.id);
        case 'UPDATE_TODO':
            return state.map(todo => todo.id === action.payload.id ? action.payload: todo);
        default:
                return [...state];
    }
}
export default function TodoListWithReducer() {
    const [state, dispatch] = useReducer(todoReducer, todos);
    const onDeleteHandler = (todo) => {
        dispatch({
            type: 'DELETE_TODO',
            payload: todo,
        })
    }
    return(
        <div>
           <TodoList todos={state} onTodoDelete={onDeleteHandler}/>
        </div>
    )
}