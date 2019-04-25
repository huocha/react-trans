import React, { Component } from 'react';
import Profile from '../components/User/Profile';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as userActions from '../actions/userActions';
import * as translateActions from '../actions/translateActions';

class ProfileContainer extends Component {
	constructor(props){
		super(props);
	}
	render(){
		return(
			<Profile {...this.props}/>
		);
	}
}

function mapStateToProps(state) {
	return {
		user: state.user,
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
)(ProfileContainer);
