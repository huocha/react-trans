import React, { Component } from 'react';
import { CardTitle, CardImg, CardSubtitle, CardText, Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';

class Profile extends Component {
	constructor(props){
		super(props);
	}

	render(){
		return(
			<div style={{ paddingTop: '70px'}}>
				<Container>
					<Row  className="justify-content-center">
						<Col md='3'>
							<div style={{paddingLeft: '10px', paddingRight: '10px', backgroundColor: '#fffff' }}>
								<Card >
									<img top style={{ paddingTop: '10px', width: '50%', display: 'block', margin: '0 auto' }} src="../public/assets/img/user.png" alt="Card image cap" />
									<CardBody>
										<CardTitle><span>John Doe</span></CardTitle>
										<CardSubtitle className="text-right">
											<span className="fa fa-envelope"></span><p>ohn.doe@dodo.com</p>
										</CardSubtitle>
										<CardSubtitle className="text-right">
											<span className="fa fa-building-o"></span><p>International World</p>
										</CardSubtitle>

										<Button className='btn-danger btn-sm'>Log out</Button>
									</CardBody>
								</Card>


								<div className="profile-usermenu">
									<ul className="nav">
										<li className="active">
											<a href="#">
												<i className="glyphicon glyphicon-home"></i>
			Overview </a>
										</li>
										<li>
											<a href="https://codepen.io/jasondavis/pen/jVRwaG?editors=1000">
												<i className="glyphicon glyphicon-user"></i>
			Account Settings </a>
										</li>
										<li>
											<a href="#" target="_blank">
												<i className="glyphicon glyphicon-ok"></i>
			Tasks </a>
										</li>
										<li>
											<a href="#">
												<i className="glyphicon glyphicon-flag"></i>
			Help </a>
										</li>
									</ul>
								</div>

								<div className="portlet light bordered">

									<div className="row list-separated profile-stat">
										<div className="col-md-4 col-sm-4 col-xs-6">
											<div className="uppercase profile-stat-title"> 37 </div>
											<div className="uppercase profile-stat-text"> Projects </div>
										</div>
										<div className="col-md-4 col-sm-4 col-xs-6">
											<div className="uppercase profile-stat-title"> 51 </div>
											<div className="uppercase profile-stat-text"> Tasks </div>
										</div>
										<div className="col-md-4 col-sm-4 col-xs-6">
											<div className="uppercase profile-stat-title"> 61 </div>
											<div className="uppercase profile-stat-text"> Uploads </div>
										</div>
									</div>

									<div>
										<h4 className="profile-desc-title">About Jason Davis</h4>
										<span className="profile-desc-text"> Lorem ipsum dolor sit amet diam nonummy nibh dolore. </span>
										<div className="margin-top-20 profile-desc-link">
											<i className="fa fa-globe"></i>
											<a href="https://www.apollowebstudio.com">apollowebstudio.com</a>
										</div>
										<div className="margin-top-20 profile-desc-link">
											<i className="fa fa-twitter"></i>
											<a href="https://www.twitter.com/jasondavisfl/">@jasondavisfl</a>
										</div>
										<div className="margin-top-20 profile-desc-link">
											<i className="fa fa-facebook"></i>
											<a href="https://www.facebook.com/">JasonDavisFL</a>
										</div>
									</div>
								</div>

							</div>
						</Col>
						<Col md='9'>
							<div className="profile-content">
			Some user related content goes here...
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default Profile;
