import './App.css';
import Users from '../Users';
import SelectedUsers from '../SelectedUsers';
import { useState } from 'react';

function App() {
	const [selectedUsers, setSelectedUsers] = useState([]);

	return (
		<div>
			<Users setSelectedUsers={setSelectedUsers} />
			<SelectedUsers users={selectedUsers} />
		</div>
	);
}

export default App;
