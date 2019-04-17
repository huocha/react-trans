import React, { Component } from 'react';
//import './app.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Login';

export default class App extends Component {
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
