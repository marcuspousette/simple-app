const UserCard = (props) => {
	return (
		<div className="UserCard">
			<p>{props.user.name}</p>
			<p>{props.user.email}</p>
			<p>{props.user.phone}</p>
			<button>Add user</button>
		</div>
	);
};

export default UserCard;
