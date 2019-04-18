import React from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as userActions from '../actions/userActions';
import { Redirect } from 'react-router-dom';

class Home extends React.Component {
	constructor(props){
		super(props);
		console.log(props.translate['hello']);
	}

	render(){
		if( !this.props.user.username ){
			return (<Redirect to='/login' />);
		}
		return (
			<div>
				<h1>{this.props.translate.hello} {this.props.user.username}</h1>
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

function mapDispatchToProps(dispatch) {
	return {
		userActions: bindActionCreators(userActions, dispatch),
	};
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Home);
