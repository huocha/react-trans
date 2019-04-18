import axios from 'axios';
import history from '../utils/history';


function loginUser(props) {
	const { email, password } = props;

	return function (dispatch) {
		fetch('/api/login/', {
			method: 'POST',
			headers: {'Content-Type':'application/json'},
			body: JSON.stringify(props)
		}).then((response) => {
			if( response.ok) {
				dispatch({ type: 'LOGIN_SUCCESS', payload: email });
				return history.push('/home');
			}

			dispatch({ type: 'LOGIN_FAIL'});

		}).catch((error) => dispatch({ type: 'LOGIN_FAIL'}));
	};
}

export {
	loginUser
};
