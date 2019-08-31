import React, { Component } from 'react';
import './PropertyDetails.css';
import API from '../../utils/API';

import PropertyMap from '../PropertyMap';

import PropertyCard from '../PropertyCard';
import {
	Button,
	Container,
	Row,
	Col,
	Input,
	Label,
	Form,
	FormGroup,
	Modal,
	ModalBody,
	ModalFooter,
} from 'reactstrap';

export default class PropertyDetails extends Component {
	state = { property: {} };

	componentDidMount() {
		this.loadProperty(this.props.match.params.id);
		// console.log(
		// 	'rented or not from prop details : ' +
		// 		JSON.stringify(this.props.match.params)
		// );
	}
	onClickHandler = () => {};

	loadProperty = id => {
		API.getProperty(id)
			.then(res => {
				this.setState({ property: res.data });
			})
			.catch(err => console.log(err));
	};

	render() {
		//console.log('???? ' + this.state.property.rented);

		return (
			<div>
				<Container fluid>
					<Row>
						<Col>
							<PropertyCard
								key={this.state.property._id}
								id={this.state.property._id}
								property={this.state.property}
								loadProperty={this.loadProperty}
							/>
						</Col>
						<Col>
							<div>
								<PropertyMap />
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

{
	/* 
	 id={this.state.property._id}
	<div className="card cards position">
							<h6 className="heading">
								Property Details for {this.state.property.address}
							</h6>
							<Row>
								<Col size="md-6">
									<div>
										<img
											style={{
												height: 200,
												// marginLeft: 20,
												// marginBottom: 20,
												// borderRadius: 20,
											}}
											alt={this.state.property.name}
											src={this.state.property.imgUrl}
										/>
									</div>
								</Col>
								<Col>
									<div className="content">
										<p>
											<strong>Country:</strong> {this.state.property.country}{' '}
											<br />
											<strong>Address:</strong> {this.state.property.address}{' '}
											<br />
											<strong>City:</strong> {this.state.property.city} <br />
											<strong>Zipcode:</strong> {this.state.property.zipcode}{' '}
											<br />
											<strong>State:</strong> {this.state.property.state} <br />
											<strong>Beds:</strong> {this.state.property.beds} <br />
											<strong>Baths:</strong> {this.state.property.baths} <br />
											<strong>Total Sqft:</strong> {this.state.property.sqft}{' '}
											<br />
											<strong>Note:</strong> {this.state.property.note} <br />
										</p>
										<span
											style={{ float: 'right' }}
											onClick={() => console.log('clicked')}
											className="close"
										>
											X / Close
										</span>
									</div>
								</Col>
							</Row>
						</div> */
}

// const PropertyDetails  => (
// 	<div className="card cards position">
// 		<h6 className="heading">Property Details</h6>
// 		<div>
// 			<img
// 				style={{
// 					height: 200,
// 					marginLeft: 20,
// 					marginBottom: 20,
// 					borderRadius: 20,
// 				}}
// 				alt={props.name}
// 				src={props.image}
// 			/>
// 		</div>

// 		<div className="content">
// 			<p>
// 				<strong>Country:</strong> {props.country} <br />
// 				<strong>Address:</strong> {props.address} <br />
// 				<strong>City:</strong> {props.city} <br />
// 				<strong>Zipcode:</strong> {props.zipcode} <br />
// 				<strong>State:</strong> {props.state} <br />
// 				<strong>Beds:</strong> {props.beds} <br />
// 				<strong>Baths:</strong> {props.baths} <br />
// 				<strong>Total Sqft:</strong> {props.sqft} <br />
// 				<strong>Note:</strong> {props.note} <br />
// 			</p>
// 			<span onClick={() => props.close()} className="close">
// 				Close
// 			</span>
// 		</div>
// 	</div>
// );

// export default PropertyDetails;
