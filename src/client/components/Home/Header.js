import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Badge, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, Dropdown  } from 'reactstrap';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as translateActions from '../../actions/translateActions';
import { AppAsideToggler, AppHeaderDropdown, AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import Select, { components } from 'react-select';
/*import logo from '../../public/assets/img/logo.jpg';*/

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

				<AppSidebarToggler className="d-md-down-none" display="lg" />

				<Nav className="d-md-down-none" navbar>
					<NavItem className="px-3">
						<NavLink to="/dashboard" className="nav-link" >Dashboard</NavLink>
					</NavItem>
					<NavItem className="px-3">
						<Link to="/users" className="nav-link">Users</Link>
					</NavItem>
					<NavItem className="px-3">
						<NavLink to="#" className="nav-link">Settings</NavLink>
					</NavItem>
				</Nav>
				<Nav className="ml-auto" navbar>
					<NavItem className="d-md-down-none">
						<NavLink to="#" className="nav-link"><i className="icon-bell"></i><Badge pill color="danger">5</Badge></NavLink>
					</NavItem>
					<NavItem className="d-md-down-none">
						<NavLink to="#" className="nav-link"><i className="icon-list"></i></NavLink>
					</NavItem>
					<NavItem className="d-md-down-none">
						<NavLink to="#" className="nav-link"><i className="icon-location-pin"></i></NavLink>
					</NavItem>
					<NavItem className="d-md-down-none">
						<Dropdown direction="down" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
							<DropdownToggle nav>
								<img src={'../public/assets/img/user.png'} className="img-avatar" alt="admin@bootstrapmaster.com" />
							</DropdownToggle>
							<DropdownMenu right>
								<DropdownItem header tag="div" className="text-center"><strong>John Doe</strong></DropdownItem>
								<DropdownItem><i className="fa fa-user"></i> Profile</DropdownItem>
								<DropdownItem><i className="fa fa-wrench"></i> Settings</DropdownItem>
								<DropdownItem><i className="fa fa-usd"></i> Cart<Badge color="danger">42</Badge></DropdownItem>
								<DropdownItem onClick={e => this.props.onLogout(e)}><i className="fa fa-lock"></i> Logout</DropdownItem>
							</DropdownMenu>
						</Dropdown >
					</NavItem>
				</Nav>
				<AppAsideToggler className="d-md-down-none" />
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
