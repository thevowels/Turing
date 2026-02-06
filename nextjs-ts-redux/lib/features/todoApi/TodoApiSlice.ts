import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export interface Todo{
    _id: string;
    title: string;
    completed: boolean;
}

export interface  TodoApiResponse{
    data: Todo[];
}


export const todoApiSlice = createApi({
    reducerPath: 'todoApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3000/api'}),
    endpoints: (build) => ({
        getAllTodos: build.query<TodoApiResponse, undefined>({
            query: (undefined) => 'todos'
        }),
    })
});

export const { useGetAllTodosQuery} = todoApiSlice;