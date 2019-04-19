import React, { Component } from 'react';
import './app.scss';
import Login from './components/Login';
import Home from './components/Home';
import Register from './components/Register';
import Error from './components/Error';
import Navigation from './components/Navigation';
import history from './utils/history';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import * as translateActions from './actions/translateActions';


class App extends Component {
	render() {
		return (

			<BrowserRouter history={history}>
				<div>
					{/*<Navigation></Navigation>*/}
					<Switch>
						<Route exact path="/" component={Login}  />
						<Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />
						<Route exact path="/register" name="Register Page" render={props => <Register {...props}/>} />
						<Route path="/login" component={Login} />
						<Route path="/home" component={Home} />
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
