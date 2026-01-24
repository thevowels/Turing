'use client';

import {TodoModel} from "@/app/components/reducer/TodoModel";
import Card from '@mui/material/Card';
import {Button, CardContent} from "@mui/material";
import {TodoActions} from "@/app/components/reducer/TodoWithReducer";
import {useDispatch, useSelector} from "react-redux";
import {addTodo, deleteTodo, updateTodo} from "@/lib/features/todos/todoSlice";
interface TodoUIProps{
    todo: TodoModel,
}
export default  function TodoUI({todo}:TodoUIProps)
{
    const dispatch = useDispatch();
    const onEditHandler = ()=> {
        console.log('onEditHandler');
    }

    const onDeleteHandler = ()=> {
        console.log('Delete Handler');
        dispatch(deleteTodo(todo));
    }
    return (
        <Card>
            <CardContent>
                {todo.title}
                <Button onClick={onEditHandler} variant={"contained"}>Edit</Button>
                <Button onClick={onDeleteHandler} variant={"contained"}>Delete</Button>
            </CardContent>
        </Card>
    )
}