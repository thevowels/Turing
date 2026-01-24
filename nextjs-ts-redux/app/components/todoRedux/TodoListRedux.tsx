'use client';

import {TodoModel} from "@/app/components/reducer/TodoModel";
import TodoUI from "@/app/components/todoRedux/TodoUI";
interface  TodoListProps {
    todos: TodoModel[]
}

export default function TodoListRedux({todos}: TodoListProps) {
    return (
        <div>
            {todos.map(todo => <TodoUI key={todo.id} todo={todo}/>)}
        </div>
    )
}