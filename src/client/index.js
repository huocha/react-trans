import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { AUTH_USER } from './actions/types/index';
import App from './App';
import reducers from './reducers';
import history from './utils/history';
import routes from './routes';

//import './components/bundle.scss';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

const user = JSON.parse(localStorage.getItem('user'));

if (user && user.token) {
	store.dispatch({ type: AUTH_USER });
}

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>
	, document.getElementById('root'));
