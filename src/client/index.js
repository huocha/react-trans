import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, Link } from 'react-router-dom';
import reduxThunk from 'redux-thunk';
import { AUTH_USER } from './actions/types/index';
import Home from './components/Home';
import Login from './components/Login';
import App from './components/App';
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
		<Router history={history}>
			<Route exact path="/" component={App} />
			<Route path="/login" component={Login} />
			<Route path="/home" component={Home} />
		</Router>
	</Provider>
	, document.getElementById('root'));
