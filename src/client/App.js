import React, { Component } from 'react';
import './app.scss';
import LoginContainer from './container/LoginContainer';
import Home from './components/Home';
import RegisterContainer from './container/RegisterContainer';
import Error from './components/Error';
import Navigation from './components/Navigation';
import history from './utils/history';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import * as translateActions from './actions/translateActions';
import { AppHeader } from '@coreui/react';
import Header from './components/Header';

class App extends Component {
	render() {
		return (

			<BrowserRouter history={history}>
				<div>
					<AppHeader fixed>
						<Header onLogout={e=> console.log(e)}/>
					</AppHeader>
					<Switch>
						<Route exact path="/" component={LoginContainer}  />
						<Route exact path="/login" name="Login Page" render={props => <LoginContainer {...props}/>} />
						<Route exact path="/register" name="Register Page" render={props => <RegisterContainer {...props}/>} />
						<Route component={Error} />
					</Switch>
				</div>
			</BrowserRouter>

		);
	}
}



function mapStateToProps(state) {
	return { translate: state.translate };
}

function mapDispatchToProps(dispatch) {
	return {
		translateActions: bindActionCreators(translateActions, dispatch),
	};
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
