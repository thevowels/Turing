import {TodoModel} from "@/app/components/reducer/TodoModel";
import {createSlice} from "@reduxjs/toolkit";
import {createAppSlice} from "@/lib/createAppSlice";

export interface TodoSliceState{
    todos: TodoModel[];
}

const initialState: TodoSliceState = {
    todos: [
        {
            id: '1',
            title: 'task 1'
        },
        {
            id: '2',
            title: 'Todo 2'
        }
    ],
}

export const todoSlice = createAppSlice({
    name: "todos",
    initialState: initialState,
    reducers: (create) =>({
        addTodo: (state, action) => {
            state.todos.push(action.payload);
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
        },
        updateTodo: (state, action) => {
            state.todos = state.todos.map(todo => todo.id === action.payload.id ? action.payload : todo);
        }
    }),
    selectors: {
        selectTodos: (state) => state.todos,
        selectTodoCount: (state) => state.todos.length,
    }
});

export const {addTodo, deleteTodo, updateTodo} = todoSlice.actions;

export const {selectTodos, selectTodoCount} = todoSlice.selectors;