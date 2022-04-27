import NamePlate from './NamePlate';
import { connect } from 'react-redux';

const SelectedUsers = (props) => {
	const renderNamePlates = () => {
		return props.users.map((user, i) => <NamePlate user={user} key={i} />);
	};

	return <div className="SelectedUsers">{renderNamePlates()}</div>;
};

const mapState = (state) => {
	return { users: state.users };
};

export default connect(mapState)(SelectedUsers);
