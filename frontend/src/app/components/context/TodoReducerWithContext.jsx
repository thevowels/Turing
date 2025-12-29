'use client';
import {todoReducer} from "@/app/components/reducer/TodoListWithReducer";
import {useContext, useReducer} from "react";
import {TodoContext, TodoDispatchContext} from "@/app/components/context/TodoContext";

let initialTodos = [
    {
        id: 1,
        title: 'Todo 1',
    },
    {
        id: 2,
        title: 'Todo 2'
    }
]

let id = 3;
function uniqueId()
{
    return id++;
}
function  TodoItem({todo})
{
    const dispatch = useContext(TodoDispatchContext);
    const onDeleteHandler = () => {
        dispatch({
            type: 'DELETE_TODO',
            payload: todo
        })
    }
    return (
        <div>
            {todo.title}
            &nbsp;
            <button type={"button"} onClick={onDeleteHandler} >Delete</button>
        </div>
    )
}

function TodoList({onTodoDelete}) {
    const todos = useContext(TodoContext);
    return (
        <div>
            {
                todos.map(todo => (
                    <TodoItem key={todo.id}
                              todo={todo}
                              />
                ))
            }
        </div>
    )
}
export default function TodoReducerWithContext ()
{
    const [todos, dispatch] = useReducer(todoReducer, initialTodos);


    return(
        <div>
            <div>
                Todos count: {todos.length}
            </div>

            Todo List.
            <TodoContext value={todos}>
                <TodoDispatchContext value={dispatch}>
                    <TodoList/>
                </TodoDispatchContext>
            </TodoContext>
        </div>
    )
}