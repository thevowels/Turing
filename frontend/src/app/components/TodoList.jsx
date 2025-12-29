'use client';

import TodoItem from "@/app/components/TodoItem";

export default function TodoList({todos, onTodoDelete}) {
    return (
        <div>
            {
                todos.map(todo => (
                    <TodoItem key={todo.id}
                              todo={todo}
                              onDelete={onTodoDelete}/>
                ))
            }
        </div>
    )
}