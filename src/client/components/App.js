import React, { Component } from 'react';
//import './app.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Login';
import Home from './Home';
import Error from './Error';
import Navigation from './Navigation';
import history from '../utils/history';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import * as translateActions from '../actions/translateActions';

class App extends Component {
	render() {
		return (

			<BrowserRouter history={history}>
				<div>
					<Navigation></Navigation>
					<Switch>
						<Route exact path="/" component={Login}  />
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
