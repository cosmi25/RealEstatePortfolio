import React, { Component } from 'react';
import API from '../../utils/API';
import axios from 'axios';
import './NewProperty.css';
import {
	Button,
	Form,
	FormGroup,
	Label,
	Col,
	CustomInput,
	Input,
	Modal,
	ModalHeader,
	ModalBody,
	ModalFooter,
} from 'reactstrap';

export default class NewProperty extends Component {
	state = {
		country: '',
		address: '',
		city: '',
		state: '',
		zipcode: '',
		types: '',
		beds: '',
		baths: '',
		sqft: '',
		imgUrl: '',
		note: '',
		modal: false,
	};
	toggle = () => {
		this.setState(prevState => ({ modal: !prevState.modal }));
	};
	resetFormProperty = () => {
		this.setState({
			country: '',
			address: '',
			city: '',
			state: '',
			zipcode: '',
			types: '',
			beds: '',
			baths: '',
			sqft: '',
			imgUrl: '',
			note: '',
		});
	};
	submitNewProperty = e => {
		e.preventDefault();
		API.saveProperty(this.state)
			.then(response => console.log(response.data))
			.catch(err => console.log(err));
		this.resetFormProperty();
		this.props.loadProperties();
		this.toggle();
	};

	handleInputChange = eventData => {
		const target = eventData.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;
		this.setState({ [name]: value });

		//??? does form button should be inside form area not in the modal footer
	};
	render() {
		return (
			<div>
				<Button onClick={this.toggle}>New Property</Button>
				<Modal
					isOpen={this.state.modal}
					toggle={this.toggle}
					className={this.props.className}
				>
					<ModalHeader toggle={this.toggle}>New Property Details</ModalHeader>
					<ModalBody>
						<Form>
							<FormGroup row>
								<Label for="country" sm={2}>
									Country
								</Label>
								<Col sm={10}>
									<Input
										type="text"
										name="country"
										id="country"
										//value={this.state.country}
										//value={this.state.property.country}
										onChange={this.handleInputChange}
										placeholder="this field is required"
									/>
								</Col>
							</FormGroup>
							<FormGroup row>
								<Label for="address" sm={2}>
									Address
								</Label>
								<Col sm={10}>
									<Input
										type="text"
										name="address"
										id="address"
										//value={this.state.address}
										//value={this.state.property.address}
										onChange={this.handleInputChange}
										//placeholder="with a placeholder"
									/>
								</Col>
							</FormGroup>
							<FormGroup row>
								<Label for="city" sm={2}>
									City
								</Label>
								<Col sm={10}>
									<Input
										type="text"
										name="city"
										id="city"
										//value={this.state.city}
										onChange={this.handleInputChange}
										//placeholder="with a placeholder"
									/>
								</Col>
							</FormGroup>
							<FormGroup row>
								<Label for="state" sm={2}>
									State
								</Label>
								<Col sm={10}>
									<Input
										type="text"
										name="state"
										id="state"
										//Value={this.state.state}
										onChange={this.handleInputChange}
										//placeholder="with a placeholder"
									/>
								</Col>
							</FormGroup>
							<FormGroup row>
								<Label for="zipcode" sm={2}>
									Zipcode
								</Label>
								<Col sm={10}>
									<Input
										type="text"
										name="zipcode"
										id="zipcode"
										//value={this.state.zipcode}
										onChange={this.handleInputChange}
										//placeholder="with a placeholder"
									/>
								</Col>
							</FormGroup>
							<FormGroup row>
								<Label for="types" sm={2}>
									Property Type
								</Label>
								<Col sm={10}>
									<Input
										type="select"
										name="types"
										id="types"
										onChange={this.handleInputChange}
									>
										<option value="">Select</option>
										<option>Single Family</option>
										<option>Condo/Townhome</option>
										<option>Multi Family</option>
									</Input>
								</Col>
							</FormGroup>
							<FormGroup row>
								<Label for="beds" sm={2}>
									Beds
								</Label>
								<Col sm={10}>
									<Input
										type="number"
										name="beds"
										id="beds"
										//value={this.state.beds}
										onChange={this.handleInputChange}
										//placeholder="with a placeholder"
									/>
								</Col>
							</FormGroup>
							<FormGroup row>
								<Label for="baths" sm={2}>
									Baths
								</Label>
								<Col sm={10}>
									<Input
										type="number"
										name="baths"
										id="baths"
										//value={this.state.baths}
										onChange={this.handleInputChange}
										//placeholder="with a placeholder"
									/>
								</Col>
							</FormGroup>
							<FormGroup row>
								<Label for="sqft" sm={2}>
									Total sq ft/m
								</Label>
								<Col sm={10}>
									<Input
										type="number"
										name="sqft"
										id="sqft"
										//value={this.state.sqft}
										onChange={this.handleInputChange}
										//placeholder="with a placeholder"
									/>
								</Col>
							</FormGroup>
							{/* here comes the images input  */}
							{/* from these images i have to take my input for carousel */}
							<FormGroup row>
								<Label for="imgUrl" sm={2}>
									Images
								</Label>
								<Col sm={10}>
									<Input
										type="file"
										name="imgUrl"
										id="imgUrl"
										//value={this.state.sqft}
										onChange={this.handleInputChange}
										//placeholder="with a placeholder"
										multiple
									/>
								</Col>
							</FormGroup>
							<FormGroup row>
								<Label for="note" sm={2}>
									Note
								</Label>
								<Col sm={10}>
									<Input
										type="textarea"
										name="note"
										id="note"
										//value={this.state.note}
										onChange={this.handleInputChange}
										//placeholder="with a placeholder"
									/>
								</Col>
							</FormGroup>
							{/* <FormGroup row>
								<Label for="zipcode" sm={2}>
									Zipcode
								</Label>
								<Col sm={10}>
									<Input
										type="zipcode"
										name="zipcode"
										id="zipcode"
										//placeholder="with a placeholder"
									/>
								</Col>
							</FormGroup> */}
							<Button color="primary" onClick={this.submitNewProperty}>
								Add New Property
							</Button>
						</Form>
					</ModalBody>
					<ModalFooter>
						{' '}
						<Button color="secondary" onClick={this.toggle}>
							Cancel
						</Button>
					</ModalFooter>
				</Modal>
			</div>
		);
	}
}
// submitNewProperty = e => {
// 	e.preventDefault();

// 	API.saveProperty(
// 		this.state
// 		//below are options to the this.state
// 		// {
// 		// 	country: this.state.country,
// 		// 	address: this.state.address,
// 		// 	city: this.state.city,
// 		// 	zipcode: this.state.zipcode,
// 		// 	state: this.state.state,
// 		// 	beds: this.state.beds,
// 		// 	baths: this.state.baths,
// 		// 	sqft: this.state.sqft,
// 		// 	note: this.state.note,
// 		// }
// 	)
// 		// axios
// 		// 	.post('/api/properties', {
// 		// 		country: this.state.country,
// 		// 		address: this.state.address,
// 		// 		city: this.state.city,
// 		// 		zipcode: this.state.zipcode,
// 		// 		state: this.state.state,
// 		// 		types: this.state.types,
// 		// 		beds: this.state.beds,
// 		// 		baths: this.state.baths,
// 		// 		sqft: this.state.sqft,
// 		// 		imgUrl: this.state.imgUrl,
// 		// 		note: this.state.note,
// 		// 	})
// 		.then(response => console.log(response.data))
// 		.catch(err => console.log(err));
// 	this.resetFormProperty();
// 	this.props.loadProperties();
// 	this.toggle();
// };
