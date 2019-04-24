import React, { Component } from 'react';
import { Button, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';

export default class Register extends Component {
	constructor(props){
		super(props);
		console.log(props)
	}

	render() {
		return (
			<div className="app flex-row align-items-center">
				<Container>
					<Row className="justify-content-center">
						<Col md="9" lg="7" xl="6">
							<Card className="mx-4">
								<CardBody className="p-4">
									<Form>
										<h1>{this.props.translate['register.title']}</h1>
										<p className="text-muted">{this.props.translate['register.subtitle']}</p>
										<InputGroup className="mb-3">
											<InputGroupAddon addonType="prepend">
												<InputGroupText>
													<i className="fa fa-user"></i>
												</InputGroupText>
											</InputGroupAddon>
											<Input type="text" placeholder={this.props.translate['register.username']} autoComplete="username" />
										</InputGroup>
										<InputGroup className="mb-3">
											<InputGroupAddon addonType="prepend">
												<InputGroupText>@</InputGroupText>
											</InputGroupAddon>
											<Input type="text" placeholder={this.props.translate['register.email']} autoComplete="email" />
										</InputGroup>
										<InputGroup className="mb-3">
											<InputGroupAddon addonType="prepend">
												<InputGroupText>
													<i className="fa fa-lock"></i>
												</InputGroupText>
											</InputGroupAddon>
											<Input type="password" placeholder={this.props.translate['register.password']} autoComplete="new-password" />
										</InputGroup>
										<InputGroup className="mb-4">
											<InputGroupAddon addonType="prepend">
												<InputGroupText>
													<i className="fa fa-lock"></i>
												</InputGroupText>
											</InputGroupAddon>
											<Input type="password" placeholder={this.props.translate['register.confirmPassword']} autoComplete="new-password" />
										</InputGroup>
										<Button color="success" block>{this.props.translate['register.submit']}</Button>
									</Form>
								</CardBody>
								<CardFooter className="p-4">
									<Row>
										<Col xs="12" sm="6">
											<Button className="btn-facebook mb-1" block><span>facebook</span></Button>
										</Col>
										<Col xs="12" sm="6">
											<Button className="btn-twitter mb-1" block><span>twitter</span></Button>
										</Col>
									</Row>
								</CardFooter>
							</Card>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}
