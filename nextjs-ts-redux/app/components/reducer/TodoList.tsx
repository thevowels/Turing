'use client';

import {TodoModel} from "@/app/components/reducer/TodoModel";
import Stack from '@mui/material/Stack';
import TodoUi from "@/app/components/reducer/TodoUi";
import {Dispatch} from "react";
import {TodoActions} from "@/app/components/reducer/TodoWithReducer";

interface TodoListProps {
    todos: TodoModel[],
    dispatch: Dispatch<TodoActions>,
}
export default function TodoList({todos, dispatch}: TodoListProps) {
    return(
        <Stack>
            {todos.map(todo => <TodoUi key={todo.id} todo={todo} dispatch={dispatch}/>)}
        </Stack>
    );
}