import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export interface Todo{
    _id: string;
    title: string;
    completed: boolean;
}

export interface  TodoApiResponse{
    data: Todo[];
}

export interface CreateTodoApiResponse{
    message: string;
    data: Todo;
}


export const todoApiSlice = createApi({
    reducerPath: 'todoApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3000/api'}),
    tagTypes: ['Todos'],
    endpoints: (build) => ({
        getAllTodos: build.query<TodoApiResponse, undefined>({
            query: (undefined) => 'todos',
            providesTags: ['Todos']
        }),
        saveTodo: build.mutation<CreateTodoApiResponse, Partial<Todo>>({
            query: (newTodo:Todo) => ({
                url: 'todos',
                method: 'POST',
                body: newTodo
            }),
            invalidatesTags:['Todos']
        }),
        deleteTodo: build.mutation<Todo,string>({
            query: (id: string) => ({
                url: `todos/${id}`,
                method:'DELETE',
                body: undefined
            }),
            invalidatesTags:['Todos']
        })
    })
});

export const { useGetAllTodosQuery, useSaveTodoMutation, useDeleteTodoMutation} = todoApiSlice;