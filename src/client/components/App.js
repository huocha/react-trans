import React, { Component } from 'react';
//import './app.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Login';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as translateActions from '../actions/translateActions';

class App extends Component {
	componentDidMount() {
		fetch('/api/getUsername')
			.then(res => res.json())
			.then(user => this.setState({ username: user.username }));
	}

	render() {
		return (
			<div className="container">
				<Login />
			</div>
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
