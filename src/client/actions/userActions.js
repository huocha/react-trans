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
				return dispatch({ type: 'LOGIN_SUCCESS', payload: email });

			}

			return dispatch({ type: 'LOGIN_FAIL'});

		}).catch((error) => dispatch({ type: 'LOGIN_FAIL'}));
	};
}

export {
	loginUser
};
