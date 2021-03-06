import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Badge, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, Dropdown  } from 'reactstrap';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as translateActions from '../../actions/translateActions';
import { AppAsideToggler, AppHeaderDropdown, AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import Select, { components } from 'react-select';

const propTypes = {
	children: PropTypes.node,
};

const defaultProps = {};


const Option = props => {
	return (
		<div className="d-inline-block">
			<img style={{ width: '24px' }} src={props.data.img} />
			<span>{props.data.label}</span>
		</div>
	);
};

const options = [
	{ value: 'en', label: 'English', img: '../public/assets/img/en.png' },
	{ value: 'fr', label: 'Français', img:  '../public/assets/img/fr.png' },
];

const SelectLanguage = () => {
	return (<NavItem className="d-md-down-none">
		<div style={{ width: '100px'}}>
			<Select
				value={options.filter(option => option.value === this.props.translate.language)}
				onChange={this.onChangeLanguage}
				options={options}
				// components={{ Option: Option }}
			/>
		</div>
	</NavItem>);
};

class Header extends Component {
	constructor(props){
		super(props);
		this.state = {
			 dropdownOpen: false
		};

		this.onChangeLanguage = this.onChangeLanguage.bind(this);
		this.toggle = this.toggle.bind(this);
	}

	onChangeLanguage(e){
		if(this.props.translate.language !== e.value){
			this.props.translateActions.changeLangue(e.value);
		}
	}

	toggle() {
		console.log('heeee');
		this.setState({
			dropdownOpen: !this.state.dropdownOpen
		});
	}
	render() {

		// eslint-disable-next-line
    const { children, ...attributes } = this.props;

		return (
			<React.Fragment>
				<AppSidebarToggler className="d-lg-none" display="md" mobile />
				<div style={{ paddingLeft: '30px'}}>
					<img src="../public/assets/img/logo.png" style={{ height: '30px' }} />
					<span> Translator</span>
				</div>
				<Nav className="ml-auto" navbar>
					<NavItem className="d-md-down-none">
						<NavLink to="#" className="nav-link"><i className="fa fa-shopping-cart"></i><Badge pill color="danger">5</Badge></NavLink>
					</NavItem>
					<NavItem className="d-md-down-none">
						<NavLink to="#" className="nav-link"><i className="icon-list"></i></NavLink>
					</NavItem>
					{/*<NavItem className="d-md-down-none">
						<NavLink to="#" className="nav-link"><i className="icon-location-pin"></i></NavLink>
					</NavItem>*/}
					<NavItem className="d-md-down-none">
						<div style={{ width: '100px'}}>
							<Select
								value={options.filter(option => option.value === this.props.translate.language)}
								onChange={this.onChangeLanguage}
								options={options}
								// components={{ Option: Option }}
							/>
						</div>
					</NavItem>
					<NavItem className="d-md-down-none">
						<Dropdown direction="down" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
							<DropdownToggle nav>
								<img src={'../public/assets/img/user.png'} className="img-avatar" alt="" />
							</DropdownToggle>
							<DropdownMenu right>
								<DropdownItem header tag="div" className="text-center"><div><strong>John Doe</strong></div><small>(john.doe@dodo.com)</small></DropdownItem>
								<DropdownItem><Link to='/profile'><i className="fa fa-user"></i> Profile</Link></DropdownItem>
								<DropdownItem><i className="fa fa-shopping-cart"></i> Cart<Badge color="danger">42</Badge></DropdownItem>
								<DropdownItem><i className="fa fa-wrench"></i> Settings</DropdownItem>
								<DropdownItem onClick={e => this.props.onLogout(e)}><i className="fa fa-lock"></i> Logout</DropdownItem>
							</DropdownMenu>
						</Dropdown >
					</NavItem>
				</Nav>
				{/*<AppAsideToggler className="d-md-down-none" />*/}
				{/*<AppAsideToggler className="d-lg-none" mobile />*/}
			</React.Fragment>
		);
	}
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

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
)(Header);
