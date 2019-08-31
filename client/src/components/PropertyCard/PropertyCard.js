import React, { Component } from 'react';
import EditProperty from '../EditProperty';
import API from '../../utils/API';
import SiteCarousel from '../SiteCarousel';

import TenantsList from '../TenantsList';
import './PropertyCard.css';
import {
	Card,
	CardHeader,
	CardBody,
	Button,
	CardText,
	Nav,
	Navbar,
	NavItem,
	NavLink,
	Container,
	Row,
	Col,
} from 'reactstrap';

export default class PropertyCard extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		//	rented: this.props.property.rented
	}

	deleteProperty = id => {
		API.deleteProperty(id)
			.then(res => {
				// this.loadProperties()
				console.log(res);
			})
			.catch(err => console.log(err));
	};

	updateUi = () => {
		//this has to load properties page
		//where the properties are updated with this prop deleted
	};

	render() {
		// const tenant = this.state.tenants.filter(
		// 	tenant => tenant.propertyId == this.props.id
		// );

		//console.log('PropertyCard.render method props id ' + this.props.id);
		//console.log('tenant id from filter ' + this.state.tenants[0]);

		//console.log('RRREEENTED from prop card : ' + this.props.property.rented);

		return (
			<div>
				<Card>
					<CardHeader>
						{/* here I have a probl with aligning the three buttons */}
						<Row>
							<Col sm={6} lg={4}>
								<EditProperty
									className="editProperty"
									id={this.props.id}
									property={this.props.property}
									loadProperty={this.props.loadProperty}
								/>
							</Col>
							<Col sm={6} lg={4}>
								<Button
									outline
									className="deleteProperty"
									onClick={() => {
										this.deleteProperty(this.props.id);
										//this.updateUi();
									}}
								>
									Delete Property
								</Button>
							</Col>
							<Col sm={6} lg={4}></Col>
						</Row>
						<div />
						<div> </div>
						<div />
					</CardHeader>

					<CardBody>
						<Row>
							<Col>
								<SiteCarousel />
								{/* <CardImg top width="100%" src={this.state.property.imgUrl} /> */}
							</Col>
							<Col>
								<h5>
									<span>{/* <i className='fas fa-users' /> */}</span> Property
									Details
								</h5>
								<hr />
								<CardText>
									<i className="fas fa-home" />: {this.props.property.address}
									{', '}
									{this.props.property.city}
									{', '}
									{this.props.property.state}
									{', '}
									{this.props.property.zipcode}
									{/* <strong>City:</strong>  <br /> */}
									<br />
									<i className="fas fa-bed" /> {this.props.property.beds} <br />
									<i className="fas fa-shower" /> {this.props.property.baths}{' '}
									<br />
									<i className="fas fa-ruler-combined" />{' '}
									{this.props.property.sqft + ' sq ft'}
									<br />
									<i className="fas fa-comment-alt" />{' '}
									{this.props.property.note} <br />
									rented : {JSON.stringify(this.props.property.rented)} <br />
								</CardText>
							</Col>
						</Row>
						<hr />
						<Row>
							<Col>
								<TenantsList
									id={this.props.id}
									property={this.props.property}
								></TenantsList>
							</Col>
						</Row>
					</CardBody>
				</Card>
			</div>
		);
	}
}

// componentDidMount() {
// 	// API.getTenants()
// 	// 	.then(res => {
// 	// 		//console.log('id ' + this.props.match.params.id);
// 	// 		this.setState({ tenants: res.data });
// 	// 		console.log(this.state.tenants);
// 	// 	})
// 	// 	.catch(err => console.log(err));
// 	// this.getTenantDetails(this.props.id);
// 	console.log(
// 		'PropertyCard.componentDidMount id ' + JSON.stringify(this.props)
// 	);
// 	if (this.props.id != null) {
// 		this.getTenantDetails(this.props.id);
// 	}
// }

// getTenantDetails = propertyId => {
// 	console.log('PropertyCard.getTenantDetails propertyId=' + propertyId);
// 	//this.state.tenants.filter();
// 	API.getPropertyTenants(propertyId)
// 		.then(res => {
// 			console.log('tenant data' + JSON.stringify(res.data));
// 			// console.log('state before setstate ' + this.state.tenants.length);

// 			this.setState({ tenants: res.data });
// 			//console.log('state after setstate ' + this.state.tenants.length);
// 		})
// 		.catch(err => console.log(err));
// };
// toggle = () => {
// 	this.setState(prevState => ({ modal: !prevState.modal }));
// };
// handleInputChange = e => {
// 	e.preventDefault();
// 	// console.log(e.target.type);
// 	// console.log(e.target.name);
// 	// console.log(e.target.value);
// 	//const placeholder = e.target.placeholder;
// 	const {
// 		target: { name, value },
// 	} = e;
// 	//placeholder = placeholder;
// 	this.setState({ [name]: value });
// };

// submitEditProperty = e => {
// 	e.preventDefault();
// 	API.updateProperty(this.props.id)
// 		.then(res => console.log(res))
// 		.catch(err => console.log(err));
// };

{
	/* <Nav>
							<NavItem>
								<EditProperty
									id={this.props.id}
									property={this.props.property}
								/>
							</NavItem>
							<NavItem>
								<Button
									onClick={() => {
										this.deleteProperty(this.props.id);
									}}
								>
									Delete Property
								</Button>
							</NavItem>
							{'    '}
							<NavItem>
								<NewTenant style={{ float: 'right' }} />
								{/* <Button>Cancel/Close</Button> */
}
{
	/* </NavItem>
						</Nav>  */
}

{
	/* <Row>
								<Col>
									<Navbar color="light" light expand="md">
										<Nav className="mr-auto" navbar>
											<NavItem>
												<NavLink href="/property/edit">Edit</NavLink>
											</NavItem>
											<NavItem>
												<Button>Delete</Button>
											</NavItem>
											<NavItem>
												<Button>Close</Button>
											</NavItem>
										</Nav>
									</Navbar>
								</Col>
							</Row> */
}
