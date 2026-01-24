'use client';

import {TextField, Box, Button} from "@mui/material";
import {Dispatch, useState} from "react";
import {TodoActions} from "@/app/components/reducer/TodoWithReducer";
import {TodoModel} from "@/app/components/reducer/TodoModel";
interface  TodoEntryProps {
    dispatch: Dispatch<TodoActions>
}

let id = 3;

function getUniqueId(){
    return (id++);
}
export default function TodoEntry({dispatch}: TodoEntryProps)
{
    const [todoText, setTodoText] = useState("");
    const todoOnchange = (e:any) => {
        setTodoText(e.target.value);
    }
    const btnAddHandler = () => {
        let newTodo: TodoModel = {
            id: getUniqueId()+"",
            title: todoText,
        }
        dispatch({
            type: 'ADD_TODO',
            payload:newTodo,
        });
        setTodoText('');
    }

    return (
        <Box
            component="form"
            sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
            noValidate
            autoComplete="off"
        >
            <TextField id="standard-basic"
                       value={todoText}
                       onChange={todoOnchange}
                       label="Todo Text"
                       variant="standard" />
            <Button onClick={btnAddHandler}>
                Add Todo
            </Button>
        </Box>
    )
}