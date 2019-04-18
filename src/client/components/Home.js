import React from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as userActions from '../actions/userActions';

class Home extends React.Component {
	constructor(props){
		super(props);
		console.log(props);
	}

	render(){
		return (
			<div>
				<h1>Hello {this.props.username}</h1>
			</div>
		);
	}

}


function mapStateToProps(state) {
	return { username: state.user.username };
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
