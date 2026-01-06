'use client';

import {useFetch} from '@/app/components/hooks/useFetch';

export default function FetchUsers() {

	const [loading, users ] = useFetch('https://jsonplaceholder.typicode.com/users');
	return (
		<div>
			<h1>Users</h1>
			{loading && <div>Loading...</div>}
			{users && users.map(user => (<div key={user.id}>{user.id}. {user.name}</div>))}
		</div>
	)
}
