/* eslint-disable */
import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import authReducer from './authReducer';
//import resetPasswordReducer from './resetPasswordReducer';
import userReducer from './userReducer';
import translateReducer from './translateReducer';

const rootReducer = combineReducers({
  user: userReducer,
	translate: translateReducer,
});

export default rootReducer;
