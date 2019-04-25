import React, { Component } from 'react';
import './app.scss';

import * as Container from './container';
import history from './utils/history';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import * as translateActions from './actions/translateActions';
import { AppHeader } from '@coreui/react';
import Header from './components/Home/Header';

class App extends Component {
	render() {
		return (

			<BrowserRouter history={history}>
				<div>
					<AppHeader fixed>
						<Header onLogout={e=> console.log(e)}/>
					</AppHeader>
					<Switch>
						<Route exact path="/" component={Container.Login}  />
						<Route exact path="/login" name="Login Page" render={props => <Container.Login {...props}/>} />
						<Route exact path="/profile" name="Profile Page" render={props => <Container.Profile {...props}/>} />
						<Route exact path="/register" name="Register Page" render={props => <Container.Register {...props}/>} />
						<Route exact path="/translator" name="Translator Page" render={props => <Container.Translator {...props}/>} />
						<Route component={Container.Page404} />
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
