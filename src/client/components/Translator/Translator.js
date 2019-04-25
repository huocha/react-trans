import React, { Component } from 'react';
import { Button, Col, Container, Input, InputGroup, InputGroupAddon, InputGroupText, Row, FormGroup, Label } from 'reactstrap';
import Select, { components } from 'react-select';

const optionsSource = [
	{ value: 'en', label: 'English' },
	{ value: 'fr', label: 'Français' },
	{ value: 'es', label: 'Spanish' },
	{ value: 'nl', label: 'Dutch' },
	{ value: 'de', label: 'German' },
	{ value: 'default', label: 'any language' },
];

const optionsTarget = [
	{ value: 'en', label: 'English' },
	{ value: 'fr', label: 'Français' },
	{ value: 'es', label: 'Spanish' },
	{ value: 'nl', label: 'Dutch' },
	{ value: 'de', label: 'German' },
	{ value: 'default', label: 'any language' },
];

class Translator extends Component {
	constructor(props){
		super(props);
		this.state = {
			maxWordCount: 3500,
			source: 'default',
			target: 'default',
			inputSource: ''
		};
		this.onChangeSource = this.onChangeSource.bind(this);
		this.onChangeTarget = this.onChangeTarget.bind(this);
		this.onTranslate = this.onTranslate.bind(this);
	}

	onChangeSource(e){
		this.setState({
			source: e.value
		});

	}
	onChangeTarget(e){
		this.setState({
			target: e.value
		});

	}

	onTranslate(e){
		this.setState({
			inputSource: e.target.value,
			inputTarget: e.target.value
		});
	}
	render() {
		return (
			<div className="flex-row align-items-center" style={{ paddingTop: '100px'}}>
				<Container>
					<Row className="">
						<Col style={{ width: 'calc(50% - 20px)' }}>
							<FormGroup row>
								<Col xs="12" md="11">
								 	<div className='pull-right' htmlFor="textarea-input" style={{ paddingBottom: '15px' }}>
										<span className="d-inline-block">Translate from </span>
										<div className="d-inline-block" style={{ width: '140px', paddingLeft: '5px'}}>
											<Select
												value={optionsSource.filter(option => option.value === this.state.source)}
												onChange={this.onChangeSource}
												options={optionsSource}
												// components={{ Option: Option }}
											/>
										</div>
									</div>
									<Input
										onChange={this.onTranslate}
										value={this.state.inputSource}
										type="textarea"
										name="textarea-input"
										id="textarea-input"
										rows="11" placeholder="Type, paste text or drop document here..." />
									<span>{this.state.inputSource.length}/<small>{this.state.maxWordCount} words</small></span>
								</Col>
							 </FormGroup>
						</Col>
						<span style={{ width: '55px', paddingTop: '80px' }}>
							<i style={{ fontSize: '35px'}} className="fa fa-chevron-right"></i>
						</span>
						<Col style={{ width: 'calc(50% - 20px)' }}>
							<FormGroup row>
								 <Col xs="12" md="11">
								 <InputGroup htmlFor="textarea-input">
									 <div className='pull-right' htmlFor="textarea-input" style={{ paddingBottom: '15px' }}>
										 <span className="d-inline-block">Translate into </span>
										 <div className="d-inline-block" style={{ width: '140px', paddingLeft: '5px'}}>
											 <Select
												 value={optionsTarget.filter(option => option.value === this.state.target)}
												 onChange={this.onChangeTarget}
												 options={optionsTarget}
												 // components={{ Option: Option }}
											 />
										 </div>
									 </div>
									 </InputGroup>
									 	<Input type="textarea" name="textarea-input" id="textarea-input" rows="11" value={this.state.inputTarget}/>
								 </Col>
							 </FormGroup>
						</Col>
					</Row>
					<Row className="d-flex justify-content-center" style={{ paddingTop: '50px'}}>

						<div className="d-inline-block" style={{ paddindLeft: '10px', paddingRight: '10px' }}>
							<span className="fa-stack fa-lg" style={{ fontSize: '30px'}}>
								<i className="fa fa-circle fa-stack-2x"></i>
								<i className="fa fa-history fa-stack-1x fa-inverse"></i>
							</span>
						</div>
						<div className="d-inline-block" style={{ paddindLeft: '10px', paddingRight: '10px' }}>
							<span className="fa-stack fa-lg" style={{ fontSize: '30px'}}>
								<i className="fa fa-circle fa-stack-2x"></i>
								<i className="fa fa-star fa-stack-1x fa-inverse"></i>
							</span>

						</div>
						<div className="d-inline-block" style={{ paddindLeft: '10px', paddingRight: '10px' }}>
							<span className="fa-stack fa-lg" style={{ fontSize: '30px'}}>
								<i className="fa fa-circle fa-stack-2x"></i>
								<i className="fa fa-users fa-stack-1x fa-inverse"></i>
							</span>
						</div>

					</Row>
				</Container>
			</div>
		);
	}
}

export default Translator;
