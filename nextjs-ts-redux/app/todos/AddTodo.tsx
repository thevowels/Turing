'use client';

import {Button, TextField} from "@mui/material";
import {useState} from "react";
import {useSaveTodoMutation} from "@/lib/features/todoApi/TodoApiSlice";

export default  function AddTodo(){

    const [text, setText] = useState("");
    const [saveTodo, result ] = useSaveTodoMutation();
    const AddTodoHandler = () => {
        saveTodo({title:text})
            .then(() => setText(""));
    }
    return (
        <div>
            <TextField value={text} onChange={e => setText(e.target.value)}/>
            <Button onClick={AddTodoHandler}>Add</Button>
        </div>
    )
}