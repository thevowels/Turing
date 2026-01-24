'use client';

import {useDispatch, useSelector} from "react-redux";
import {selectTodos} from "@/lib/features/todos/todoSlice";
import TodoListRedux from "@/app/components/todoRedux/TodoListRedux";

export default function TodoListWithRedux(){
    const todos = useSelector(selectTodos);
    return (
        <div>
            <TodoListRedux todos={todos}/>
        </div>
    )
}