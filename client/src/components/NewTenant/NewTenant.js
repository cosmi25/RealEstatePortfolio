import React, { Component } from 'react';
import './NewTenant.css';
import API from '../../utils/API';
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

export default class NewTenant extends Component {
	state = {
		title: '',
		firstName: '',
		lastName: '',
		email: '',
		homePhone: '',
		mobile: '',
		birthDate: '',
		note: '',
		modal: false,
		propertyId: this.props.propertyId,
	};

	toggle = () => {
		this.setState(prevState => ({ modal: !prevState.modal }));
	};
	resetFormTenant = () => {
		this.setState({
			// img to be finished	in the models too
			img: '',
			title: '',
			firstName: '',
			lastName: '',
			email: '',
			homePhone: '',
			mobile: '',
			birthDate: '',
			note: '',
		});
	};
	submitNewTenant = e => {
		e.preventDefault();
		API.saveTenant(this.state)
			.then(response => console.log(response.data))
			.catch(err => console.log(err));
		this.resetFormTenant();
		this.toggle();
		this.props.getTenants(this.props.propertyId);
	};

	handleInputChange = eventData => {
		const target = eventData.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;
		this.setState({ [name]: value });
	};

	//??? does form button should be inside form area not in the modal footer
	render() {
		//console.log('propr id ' + this.props.propertyId);
		//console.log('tenant load info ' + this.props.loadTenantDetails);

		return (
			<div>
				<Button onClick={this.toggle}>New Tenant</Button>

				<Modal
					isOpen={this.state.modal}
					toggle={this.toggle}
					className={this.props.className}
				>
					<ModalHeader toggle={this.toggle}>New Tenant Details</ModalHeader>
					<ModalBody>
						<Form>
							<FormGroup row />
							<h6 className="heading">Enter the tenant's info</h6>
							<FormGroup row>
								<Label sm={2}>Title</Label>
								<Col sm={10}>
									<Input
										type="select"
										name="title"
										id="title"
										placeholder="choose a title"
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
										placeholder="this field is required"
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
										placeholder="this field is required"
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
										placeholder=""
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
										placeholder=""
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
										placeholder=""
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
										placeholder=""
										onChange={this.handleInputChange}
									/>
								</Col>
							</FormGroup>
							<Button onClick={this.submitNewTenant}>Add New Tenant</Button>
						</Form>
					</ModalBody>
				</Modal>
			</div>
		);
	}
}
