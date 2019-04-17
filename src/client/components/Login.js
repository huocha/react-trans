import React from 'react';
import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const styles = {
	center: {
		marginLeft: 'auto',
		marginRight: 'auto'
	}
};

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
	}

	handleSubmit(event) {
		event.stopPropagation();
		event.preventDefault();
		console.log(this.state)
		fetch('/login/', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(this.state)
		});
	}

	handleInputChange(event) {
		const { target } = event;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const { name } = target;

		this.setState({
			[name]: value
		});
	}

	render() {
		return (
			<div className="row">
				<div className="col-sm-6 col-md-6 col-md-offset-4" style={styles.center}>
					<h1 className="text-center login-title">Log in</h1>
					<div className="account-wall">
						<form className="form-signin">
							<input type="text" name="email" className="form-control" placeholder="Email" required onChange={this.handleInputChange}></input>
							<input type="password" name="password" className="form-control" placeholder="Password" required onChange={this.handleInputChange}></input>
							<button className="btn btn-lg btn-primary btn-block" type="submit" onClick={this.handleSubmit}>
                Log in
							</button>
							<label className="checkbox pull-left">
								<input type="checkbox" name="remember" value="remember-me"></input>
								<span>Remember me</span>
							</label>
							<br />
							<a href="#" className="pull-right need-help">Need help?</a>
						</form>
					</div>
					<a href="#" className="text-center new-account">Create an account </a>
				</div>
			</div>
		);
	}
}

export default Login;
