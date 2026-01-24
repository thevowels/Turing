'use client';
import TodoList from "@/app/components/reducer/TodoList";
import {TodoModel} from "@/app/components/reducer/TodoModel";
import TodoEntry from "@/app/components/reducer/TodoEntry";
import {useReducer} from "react";
interface TodoState{
    todos: TodoModel[]
}

export type TodoActions = {
    type: 'ADD_TODO',
    payload:TodoModel
}  | {
    type: 'DELETE_TODO',
    payload:TodoModel
} | {
    type: 'UPDATE_TODO',
    payload:TodoModel
}

function todoReducer(state: TodoState, action: TodoActions) : TodoState{
    switch(action.type){
        case 'ADD_TODO':
            return {
                todos: [...state.todos, action.payload]
            };
        case 'DELETE_TODO':
            return {
                todos: state.todos.filter(todo => todo.id !== action.payload.id)
            };
        case 'UPDATE_TODO':
            return {
                todos: state.todos.map(todo => todo.id === action.payload.id ? action.payload: todo)
            };
        default:
            return state;
    }
}
const initList: TodoModel[] = [
    {
        id: '1',
        title: 'task 1',
    },
    {
        id: '2',
        title: 'task 2',
    },
];
const initState: TodoState = {
    todos: initList
}
export default function TodoWithReducer()
{
    const [state, dispatch] = useReducer(todoReducer, initState);
    return(
        <div>
            <TodoEntry dispatch={dispatch}/>
            <TodoList dispatch={dispatch} todos={state.todos}/>
        </div>
    )
}