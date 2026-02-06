'use client';
import {Todo, useDeleteTodoMutation} from "@/lib/features/todoApi/TodoApiSlice";
import {Button} from "@mui/material";
import {useRouter} from "next/navigation";

export default function TodoUI({todo}: {todo:Todo}){

    const router = useRouter();
    const [deleteTodo, result] = useDeleteTodoMutation();
    const onClickHandler = (e: any) => {
        e.preventDefault();
        router.push(`todos/${todo._id}`);
    }
    const onDelete = () => {
        deleteTodo(todo._id);
    }
    return (
        <div className={"space-x-4 mt-4"}>
            {todo.title}
            <Button variant={"contained"}>Edit </Button>
            <Button variant={"contained"} onClick={onClickHandler}>Details  </Button>
            <Button variant={"contained"} onClick={onDelete}>Delete</Button>
        </div>
    )
}