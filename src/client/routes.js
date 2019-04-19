import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App';
//import UserList from './components/users/UserList';
import Login from './components/Login';
/*import Signout from './components/auth/Signout';
import Signup from './components/auth/Signup';
import VerifyEmail from './components/auth/VerifyEmail';
import SignupVerify from './components/auth/SignupVerify';
import ResetPassword from './components/resetPassword/ResetPassword';
import ResetPasswordVerify from './components/resetPassword/ResetPasswordVerify';
import ResetPasswordNew from './components/resetPassword/ResetPasswordNew';
*/


export default (
	<Route exact path="/" component={App}>
		<Route path="login" component={(Login)} />
	</Route>
);
