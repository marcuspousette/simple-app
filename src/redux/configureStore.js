import { createStore } from 'redux';
import userReducer from './userReducer';

const configureStore = () => {
	const store = createStore(userReducer);
	return store;
};

export default configureStore;
