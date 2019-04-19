import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import { AppHeader } from '@coreui/react';
import Header from './Header';
import { Redirect } from 'react-router-dom';

export default class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);

		console.log(this.props)
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

	render() {
		return (
			<div className="app flex-row align-items-center">
				<Container>
					<Row className="justify-content-center">
						<Col md="8">
							<CardGroup>
								<Card className="p-4">
									<CardBody>
										<Form>
											<h1>{this.props.translate['login.title']}</h1>
											<p className="text-muted">{this.props.translate['login.subtitle']}</p>
											<InputGroup className="mb-3">
												<InputGroupAddon addonType="prepend">
													<InputGroupText>
														<i className="icon-user"></i>
													</InputGroupText>
												</InputGroupAddon>
												<Input type="text" placeholder={this.props.translate['login.email']} autoComplete="username" />
											</InputGroup>
											<InputGroup className="mb-4">
												<InputGroupAddon addonType="prepend">
													<InputGroupText>
														<i className="icon-lock"></i>
													</InputGroupText>
												</InputGroupAddon>
												<Input type="password" placeholder={this.props.translate['login.password']} autoComplete="current-password" />
											</InputGroup>
											<Row>
												<Col xs="6">
													<Button color="primary" className="px-4">{this.props.translate['login.submit']}</Button>
												</Col>
												<Col xs="6" className="text-right">
													<Button color="link" className="px-0">{this.props.translate['login.forget']}</Button>
												</Col>
											</Row>
										</Form>
									</CardBody>
								</Card>
								<Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
									<CardBody className="text-center">
										<div>
											<h2>{this.props.translate['login.register']}</h2>
											<p>{this.props.translate['login.register.description']}</p>
											<Link to="/register">
												<Button color="primary" className="mt-3" active tabIndex={-1}>{this.props.translate['login.register.button']}</Button>
											</Link>
										</div>
									</CardBody>
								</Card>
							</CardGroup>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}
