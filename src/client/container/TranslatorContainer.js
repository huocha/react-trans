import React, { Component } from 'react';
import Translator from '../components/Translator/Translator';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as userActions from '../actions/userActions';
import * as translateActions from '../actions/translateActions';

class TranslatorContainer extends Component {
	constructor(props){
		super(props);
	}
	render(){
		return(
			<Translator {...this.props}/>
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
)(TranslatorContainer);
