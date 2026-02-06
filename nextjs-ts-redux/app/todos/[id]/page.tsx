'use client';
import {useParams} from "next/dist/client/components/navigation";
import {todoApiSlice} from "@/lib/features/todoApi/TodoApiSlice";

export default function TodoDetail() {
    const {id} = useParams<{id: string}>();
    const {todo} = todoApiSlice.useGetAllTodosQuery(undefined, {
        selectFromResult: ({data}) => ({
            todo: data?.data?.find((todo) => todo._id === id),
        })
    })
    return (<div>
        Todo Id: {id}
        <div>
            {todo?.title}
        </div>
    </div>)
}