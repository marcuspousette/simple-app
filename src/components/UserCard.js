import { connect } from 'react-redux';

const UserCard = ({ user, addUser }) => {
	return (
		<div className="UserCard">
			<p>{user.name}</p>
			<p>{user.email}</p>
			<p>{user.phone}</p>
			<button onClick={() => addUser(user.name)}>Add user</button>
		</div>
	);
};

const mapDispatch = (dispatch) => {
	return {
		addUser: (name) => dispatch({ type: 'SELECT_USER', payload: name })
	};
};

export default connect(null, mapDispatch)(UserCard);
