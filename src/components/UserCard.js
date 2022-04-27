const UserCard = ({ user, setSelectedUsers }) => {
	return (
		<div className="UserCard">
			<p>{user.name}</p>
			<p>{user.email}</p>
			<p>{user.phone}</p>
			<button onClick={() => setSelectedUsers((os) => [...os, user.name])}>Add user</button>
		</div>
	);
};

export default UserCard;
