'use client';

import {useGetAllTodosQuery} from "@/lib/features/todoApi/TodoApiSlice";
import {useEffect} from "react";

export default function TodoPage() {
    const {data:todos, isError, isLoading, isSuccess} = useGetAllTodosQuery(undefined);

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
                {todos.data.map((todo) => <div key={todo._id}>{todo.title}</div>)}
            </div>
        )
    }
}