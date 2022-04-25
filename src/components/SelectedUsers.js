import NamePlate from './NamePlate';

const SelectedUsers = (props) => {
	const renderNamePlates = () => {
		return props.users.map((user, i) => <NamePlate user={user} key={i} />);
	};

	return <div className="SelectedUsers">{renderNamePlates()}</div>;
};

export default SelectedUsers;
