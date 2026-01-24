'use client';

import {TodoModel} from "@/app/components/reducer/TodoModel";
import Card from '@mui/material/Card';
import {Button, CardContent} from "@mui/material";
import {Dispatch} from "react";
import {TodoActions} from "@/app/components/reducer/TodoWithReducer";
interface TodoUIProps{
    todo: TodoModel,
    dispatch: Dispatch<TodoActions>,
}
export default  function TodoUi({todo, dispatch}:TodoUIProps)
{
    const onEditHandler = ()=> {
        console.log('onEditHandler');
    }

    const onDeleteHandler = ()=> {
        console.log('Delete Handler');
        dispatch({type:'DELETE_TODO', payload: todo})
    }
    return (
        <Card>
            <CardContent>
                {todo.title}
                <Button onClick={onEditHandler}>Edit</Button>
                <Button onClick={onDeleteHandler}>Delete</Button>
            </CardContent>
        </Card>
    )
}