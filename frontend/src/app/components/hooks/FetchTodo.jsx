'use client';
import {useFetch} from '@/app/components/hooks/useFetch';
export default function FetchTodo() {
	const [loading, todos ] = useFetch('https://jsonplaceholder.typicode.com/todos');
	return (
		<div>
			Todos
			{todos.map(todo => (<div key={todo.id}>{todo.title}</div>))}
			{loading && <div>Loading...</div>}
		</div>
	)
}
