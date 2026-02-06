'use client';
import {Todo} from "@/lib/features/todoApi/TodoApiSlice"
import TodoUI from "@/app/todos/TodoUI";
export default function TodoList({todos}: {todos: Todo[]}){

    return (
        <div>
            {todos.map((todo: Todo) => <div key={todo._id}>
                <TodoUI todo={todo}/>
            </div>)}
        </div>
    )
}