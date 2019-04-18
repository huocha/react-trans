/* eslint default-case: 0 */
import {
	FETCH_USERS,
} from '../actions/types/index';

const initialState = {
	username: ''
};

export default function (state = initialState, action) {
	switch (action.type) {

	case 'LOGIN_SUCCESS':
		state = { ...state, username: action.payload };
		break;

	case FETCH_USERS:
		state = { ...state, list: action.payload };
		break;
	}

	return state;
}
