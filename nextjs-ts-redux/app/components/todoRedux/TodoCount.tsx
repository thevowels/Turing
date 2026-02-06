'use client';

import {useSelector} from "react-redux";
import {selectTodoCount} from "@/lib/features/todos/todoSlice";

export default function TodoCount(){

    const todocount = useSelector(selectTodoCount);
    return (
        <div>
            There are {todocount} Todos.
        </div>
    )
}