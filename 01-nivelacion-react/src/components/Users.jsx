import React from "react";
import { useFetchUsers } from "../hooks/useFetchUsers";

const Users = () => {
	const { users } = useFetchUsers();
	return (
		<>
			<h3>Users</h3>
			<ul>
				{users.map((user) => (
					<li key={user.id}>
						{user.name} - {user.email}
					</li>
				))}
			</ul>
		</>
	);
};

export default Users;
