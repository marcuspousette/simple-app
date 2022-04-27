import UserCard from './UserCard';
import { useEffect, useState } from 'react';

const Users = ({ setSelectedUsers }) => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		console.log(users);
		const fetchData = async () => {
			const response = await fetch('https://jsonplaceholder.typicode.com/users');
			const data = await response.json();
			setUsers(data);
		};
		fetchData();
	}, []);

	useEffect(() => {
		console.log(users);
	});

	const renderUsers = () => {
		// [<UserCard />, <UserCard />, <UserCard />, <UserCard />];
		return users.map((user, i) => <UserCard key={i} user={user} setSelectedUsers={setSelectedUsers} />);
	};

	return <div>{renderUsers()}</div>;
};

export default Users;
