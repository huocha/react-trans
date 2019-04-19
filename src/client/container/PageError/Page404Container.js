import React, { Component } from 'react';
import Page404 from '../../components/PageError/Page404';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Page404Container extends Component {
	constructor(props){
		super(props);
	}
	render(){
		return(
			<Page404 {...this.props}/>
		);
	}
}

function mapStateToProps(state) {
	return {
		translate: state.translate.translate,
		language: state.translate.language
	};
}


export default connect(
	mapStateToProps,
)(Page404Container);
