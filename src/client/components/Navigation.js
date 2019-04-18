import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

class Navigation extends React.Component {
	constructor(props){
		super(props);
	}
	render(){

		return (
			<div>
				<NavLink to='/'>Home</NavLink>
				{this.props.user.username ? <NavLink to='/home'>Home</NavLink> : ''}
				{!this.props.user.username ? <NavLink to='/login'>Login</NavLink> : ''}
			</div>
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


export default withRouter(connect(
	mapStateToProps,
)(Navigation));
