'use client';

import {useDispatch, useSelector} from "react-redux";
import {selectTodos} from "@/lib/features/todos/todoSlice";
import TodoListRedux from "@/app/components/todoRedux/TodoListRedux";
import TodoEntry from "@/app/components/todoRedux/TodoEntry";
import TodoCount from "@/app/components/todoRedux/TodoCount";

export default function TodoListWithRedux(){
    const todos = useSelector(selectTodos);
    return (
        <div>
            <TodoCount/>
            <TodoEntry />
            <TodoListRedux todos={todos}/>
        </div>
    )
}