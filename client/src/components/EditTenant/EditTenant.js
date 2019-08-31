import React, { Component } from 'react';
import './EditTenant.css';
import API from '../../utils/API';
import {
	Container,
	Row,
	Col,
	Card,
	CardBody,
	Button,
	Form,
	FormGroup,
	Label,
	Input,
	FormText,
	Modal,
	ModalHeader,
	ModalBody,
	ModalFooter,
} from 'reactstrap';

//Country needs to be finished in FormGroup
//input validation
//select formgroup needs to be moved to new prop form
//edit prop does not fct : see value/defaultValue and api calls

export default class EditTenant extends Component {
	state = { tenant: {}, modal: false };

	handleInputChange = e => {
		e.preventDefault();
		const { name, value } = e.target;
		this.setState({ [name]: value });
	};

	submitEditTenant = e => {
		e.preventDefault();
		// console.log('id is ' + this.props.property._id);

		// console.log('address' + this.state.address);
		// console.log('note' + this.state.note);
		console.log('propr before updater ' + JSON.stringify(this.state));

		API.updateTenant(this.props.id, this.state)
			.then(res => {
				console.log('data returned ' + res.data);
			})

			.catch(err => console.log(err));
		this.props.loadTenants(this.props.propertyId);
		this.toggle();
	};
	toggle = () => {
		this.setState(prevState => ({ modal: !prevState.modal }));
	};
	render() {
		//console.log('id for property is ' + this.props.id);

		return (
			<div>
				<Button onClick={this.toggle}>Edit Tenant</Button>
				<Modal
					isOpen={this.state.modal}
					toggle={this.toggle}
					className={this.props.className}
				>
					<ModalHeader toggle={this.toggle}>Edit Tenant Details</ModalHeader>
					<ModalBody>
						<Form>
							<FormGroup row>
								<Label sm={2}>Title</Label>
								<Col sm={10}>
									<Input
										type="select"
										name="title"
										id="title"
										placeholder=""
										onChange={this.handleInputChange}
									>
										<option value="">Select</option>
										<option>Mr.</option>
										<option>Ms.</option>
										<option>Mrs.</option>
									</Input>
								</Col>
							</FormGroup>
							<FormGroup row>
								<Label sm={2}>First Name</Label>
								<Col sm={10}>
									<Input
										type="text"
										name="firstName"
										id="firstName"
										placeholder={this.props.tenant.firstName}
										onChange={this.handleInputChange}
									/>
								</Col>
							</FormGroup>
							<FormGroup row>
								<Label sm={2}>Last Name</Label>
								<Col sm={10}>
									<Input
										type="text"
										name="lastName"
										id="lastName"
										placeholder={this.props.tenant.lastName}
										onChange={this.handleInputChange}
									/>
								</Col>
							</FormGroup>
							<FormGroup row>
								<Label sm={2}>Email</Label>
								<Col sm={10}>
									<Input
										type="email"
										name="email"
										id="email"
										placeholder={this.props.tenant.email}
										onChange={this.handleInputChange}
									/>
								</Col>
							</FormGroup>
							<FormGroup row>
								<Label sm={2}>Home Phone</Label>
								<Col sm={10}>
									<Input
										type="number"
										name="homePhone"
										id="homePhone"
										placeholder={this.props.tenant.homePhone}
										onChange={this.handleInputChange}
									/>
								</Col>
							</FormGroup>
							<FormGroup row>
								<Label sm={2}>Mobile</Label>
								<Col sm={10}>
									<Input
										type="number"
										name="mobile"
										id="mobile"
										placeholder={this.props.tenant.mobile}
										onChange={this.handleInputChange}
									/>
								</Col>
							</FormGroup>
							<FormGroup row>
								<Label sm={2}>Birth Date</Label>
								<Col sm={10}>
									<Input
										// here the type needs to be changed
										type="date"
										name="birthDate"
										id="birthDate"
										placeholder={this.props.tenant.birthDate}
										onChange={this.handleInputChange}
									/>
								</Col>
							</FormGroup>
							<FormGroup row>
								<Label sm={2}>Note</Label>
								<Col sm={10}>
									<Input
										type="textarea"
										name="note"
										id="note"
										placeholder={this.props.tenant.note}
										onChange={this.handleInputChange}
									/>
								</Col>
							</FormGroup>
							<Button color="primary" onClick={this.submitEditTenant}>
								Edit Tenant
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

{
	/* <FormGroup row>
<Label for="address" sm={2}>
  Address
</Label>
<Col sm={10}>
  <Input
    type="text"
    name="address"
    id="address"
    onChange={this.handleInputChange}
    placeholder={this.props.property.address}
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
    onChange={this.handleInputChange}
    placeholder={this.props.property.city}
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
    onChange={this.handleInputChange}
    placeholder={this.props.property.state}
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
    onChange={this.handleInputChange}
    placeholder={this.props.property.zipcode}
  />
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
    onChange={this.handleInputChange}
    placeholder={this.props.property.beds}
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
    onChange={this.handleInputChange}
    placeholder={this.props.property.address}
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
    onChange={this.handleInputChange}
    placeholder={this.props.property.sqft}
  />
</Col>
</FormGroup>
{/* here comes the images input  */
}
{
	/* from these images i have to take my input for carousel */
}
{
	/*<FormGroup row>
<Label for="imgUrl" sm={2}>
  Images
</Label>
<Col sm={10}>
  <Input
    type="file"
    name="imgUrl"
    id="imgUrl"
    onChange={this.handleInputChange}
    placeholder={this.props.property.imgUrl}
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
    onChange={this.handleInputChange}
    placeholder={this.props.property.note}
  />
</Col>
</FormGroup> */
}
