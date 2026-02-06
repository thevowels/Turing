'use client';

import {useGetAllTodosQuery} from "@/lib/features/todoApi/TodoApiSlice";
import {useEffect} from "react";
import TodoList from "@/app/todos/TodoList";
import AddTodo from "@/app/todos/AddTodo";

export default function TodoPage() {
    const {data:todos, isError, isLoading, isSuccess} = useGetAllTodosQuery(undefined,{
        pollingInterval: 3000,
    });

    useEffect(() => {
        console.log(todos);
    }, [todos]);

    if(isError){
        return (
            <div> There is an error!!</div>
        )
    }
    if(isLoading){
        return (
            <div>
                Loading ...
            </div>
        )
    }
    if (isSuccess){
        return (
            <div>
                <AddTodo/>
                <TodoList todos={todos.data}/>
            </div>
        )
    }
}