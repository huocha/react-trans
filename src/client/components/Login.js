import React from 'react';
import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import history from '../utils/history';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as userActions from '../actions/userActions';
import * as translateActions from '../actions/translateActions';

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
		this.onChangeLanguage = this.onChangeLanguage.bind(this);

		console.log(this.props.language)
	}

	handleSubmit(event) {
		event.stopPropagation();
		event.preventDefault();

		console.log(this.state);
		this.props.userActions.loginUser(this.state);

	}

	handleInputChange(event) {
		const { target } = event;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const { name } = target;

		this.setState({
			[name]: value
		});
	}

	onChangeLanguage(event) {
		const lang = event.target.value;
		if (this.props.language !== lang){
			this.props.translateActions.changeLangue(lang);
		}
	}

	render() {
		return (
			<div className="row">
				<div className="col-sm-6 col-md-6 col-md-offset-4" style={styles.center}>
					<h1 className="text-center login-title">{this.props.translate['login.title']}</h1>
					<div className="account-wall">
						<form className="form-signin">
							<input type="text" name="email" className="form-control" placeholder={this.props.translate['login.email']} required onChange={this.handleInputChange}></input>
							<input type="password" name="password" className="form-control" placeholder={this.props.translate['login.password']} required onChange={this.handleInputChange}></input>
							<button className="btn btn-lg btn-primary btn-block" type="submit" onClick={this.handleSubmit}>
								{this.props.translate['login.submit']}
							</button>
							<label className="checkbox pull-left">
								<input type="checkbox" name="remember" value="remember-me"></input>
								<span>{this.props.translate['login.remember']}</span>
							</label>
							<br />
							<a href="#" className="pull-right need-help">{this.props.translate['login.help']}</a>
						</form>
					</div>
					<select name='lang' onChange={this.onChangeLanguage}>
						<option value='en'>English</option>
						<option value='fr'>Français</option>
					</select>
					<a href="#" className="text-center new-account">{this.props.translate['register']}</a>
				</div>
			</div>
		);
	}
}


function mapStateToProps(state) {
	return {
		translate: state.translate.translate,
		language: state.translate.language
	};
}

function mapDispatchToProps(dispatch) {
	return {
		userActions: bindActionCreators(userActions, dispatch),
		translateActions: bindActionCreators(translateActions, dispatch),
	};
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Login);
