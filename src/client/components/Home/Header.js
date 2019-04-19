import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Badge, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem } from 'reactstrap';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as translateActions from '../../actions/translateActions';
import { AppAsideToggler, AppHeaderDropdown, AppNavbarBrand, AppSidebarToggler } from '@coreui/react';


const propTypes = {
	children: PropTypes.node,
};

const defaultProps = {};

class Header extends Component {
	constructor(props){
		super(props);
		this.onChangeLanguage = this.onChangeLanguage.bind(this);
	}

	onChangeLanguage(e){
		const lang = e.target.value;
		if(this.props.translate.language !== lang){
			this.props.translateActions.changeLangue(lang);
		}

	}

	render() {

		// eslint-disable-next-line
    const { children, ...attributes } = this.props;

		return (
			<React.Fragment>
				<AppSidebarToggler className="d-lg-none" display="md" mobile />
				{/*<AppNavbarBrand
          full={{ src: logo, width: 89, height: 25, alt: 'CoreUI Logo' }}
          minimized={{ src: sygnet, width: 30, height: 30, alt: 'CoreUI Logo' }}
        />*/}
				{/*<AppSidebarToggler className="d-md-down-none" display="lg" />*/}

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
					<select name="lang" onChange={this.onChangeLanguage}>
						<option name="en" value="en">English</option>
						<option name="fr" value="fr">Français</option>
					</select>
					<AppHeaderDropdown direction="down">
						{/*<DropdownToggle nav>
							<img src={'../../assets/img/avatars/6.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
						</DropdownToggle>*/}
						<DropdownMenu right style={{ right: 'auto' }}>
							<DropdownItem header tag="div" className="text-center"><strong>Account</strong></DropdownItem>
							<DropdownItem><i className="fa fa-bell-o"></i> Updates<Badge color="info">42</Badge></DropdownItem>
							<DropdownItem><i className="fa fa-envelope-o"></i> Messages<Badge color="success">42</Badge></DropdownItem>
							<DropdownItem><i className="fa fa-tasks"></i> Tasks<Badge color="danger">42</Badge></DropdownItem>
							<DropdownItem><i className="fa fa-comments"></i> Comments<Badge color="warning">42</Badge></DropdownItem>
							<DropdownItem header tag="div" className="text-center"><strong>Settings</strong></DropdownItem>
							<DropdownItem><i className="fa fa-user"></i> Profile</DropdownItem>
							<DropdownItem><i className="fa fa-wrench"></i> Settings</DropdownItem>
							<DropdownItem><i className="fa fa-usd"></i> Payments<Badge color="secondary">42</Badge></DropdownItem>
							<DropdownItem><i className="fa fa-file"></i> Projects<Badge color="primary">42</Badge></DropdownItem>
							<DropdownItem divider />
							<DropdownItem><i className="fa fa-shield"></i> Lock Account</DropdownItem>
							<DropdownItem onClick={e => this.props.onLogout(e)}><i className="fa fa-lock"></i> Logout</DropdownItem>
						</DropdownMenu>
					</AppHeaderDropdown>
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