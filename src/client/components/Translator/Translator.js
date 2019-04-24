import React, { Component } from 'react';
import { Button, Col, Container, Input, InputGroup, InputGroupAddon, InputGroupText, Row, FormGroup, Label } from 'reactstrap';

class Translator extends Component {

	render() {
		return (
			<div className="flex-row align-items-center" style={{ paddingTop: '100px'}}>
				<Container>
					<Row className="">
						<Col md="6">
							<FormGroup row>
								 <Col xs="12" md="11">
								 	<Label htmlFor="textarea-input">Textarea</Label>
									 <Input type="textarea" name="textarea-input" id="textarea-input" rows="11"
									 placeholder="Content..." />
								 </Col>
							 </FormGroup>
						</Col>
						<Col md="6">
							<FormGroup row>
								 <Col xs="12" md="11">
								 		<Label htmlFor="textarea-input">Textarea</Label>
									 	<Input type="textarea" name="textarea-input" id="textarea-input" rows="11"
										placeholder="Content..." />
								 </Col>
							 </FormGroup>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default Translator;
