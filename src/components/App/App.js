import './App.css';
import Users from '../Users';
import SelectedUsers from '../SelectedUsers';
import { useState, useEffect } from 'react';

function App() {
	const [selectedUsers, setSelectedUsers] = useState([]);

	useEffect(() => {
		console.log(selectedUsers);
	}, [selectedUsers]);

	return (
		<div>
			<Users setSelectedUsers={setSelectedUsers} />
			<SelectedUsers />
		</div>
	);
}

export default App;
