import React, { Component } from 'react';
import API from '../../utils/API';
import { CardText, CardBody, Button } from 'reactstrap';
import NewTenant from '../NewTenant';
import EditTenant from '../EditTenant';
export default class TenantsList extends Component {
	state = {
		tenants: [],
		tenant: {},
		modal: false,
		tenantLoaded: false,
		//rented: '',
	};

	componentDidMount() {
		// console.log(
		// 	'PropertyCard.componentDidMount id ' + JSON.stringify(this.props)
		// );
		if (this.props.id != null) {
			this.getTenants(this.props.id);
		}
	}

	getTenants = propertyId => {
		//console.log('PropertyCard.getTenantDetails propertyId=' + propertyId);
		//this.state.tenants.filter();
		API.getPropertyTenants(propertyId)
			.then(res => {
				//console.log('tenant data' + JSON.stringify(res.data));
				// console.log('state before setstate ' + this.state.tenants.length);

				this.setState({ tenants: res.data });
				//console.log('state after setstate ' + this.state.tenants.length);
			})
			.catch(err => console.log(err));
	};
	toggle = () => {
		this.setState(prevState => ({ modal: !prevState.modal }));
	};
	handleInputChange = e => {
		e.preventDefault();
		const {
			target: { name, value },
		} = e;
		this.setState({ [name]: value });
	};

	deleteTenant = (id, propertyId) => {
		API.deleteTenant(id)
			.then(res => {
				this.getTenants(propertyId);
				console.log(res);
			})
			.catch(err => console.log(err));
		//this.unloadCard();
		//	console.log('properties length ' + this.state.properties.length)
	};
	isRented = () => {
		if (this.state.tenants.length > 0) {
		}
		// this.setState({ rented: this.state.rented === true });
		API.updateProperty(this.props.id, { rented: true })
			.then(res => {
				console.log('data returned ' + res.data);
			})

			.catch(err => console.log(err));
	};
	render() {
		//	console.log('rented from tenants list ' + this.props.property.rented);

		return (
			<div>
				<h5>
					<span>
						<i className="fas fa-users" />
					</span>{' '}
					Current Tenants
				</h5>
				<NewTenant
					className="newTenant"
					style={{ float: 'right' }}
					propertyId={this.props.id}
					getTenants={this.getTenants}
					property={this.props.property}
				/>
				<hr />
				<div>
					{this.state.tenants.length ? (
						<div>
							{this.state.tenants.map(tenant => {
								return (
									<CardBody>
										<CardText key={tenant._id}>
											{tenant.firstName} {tenant.lastName}
											<br />
											{tenant.homePhone} {tenant.mobile}
											<br />
											{tenant.email}
											<br />
											{tenant.birthDate}
											<br />
											{tenant.note}
											<br />
											{tenant.propertyId}
											<Button
												outline
												style={{ float: 'right' }}
												onClick={() => {
													this.deleteTenant(tenant._id, tenant.propertyId);
												}}
											>
												Delete Tenant
											</Button>
											<EditTenant
												className="editTenant"
												id={tenant._id}
												tenant={tenant}
												propertyId={tenant.propertyId}
												loadTenants={this.getTenants}
											></EditTenant>
											<hr />
										</CardText>
									</CardBody>
								);
							})}
						</div>
					) : (
						<h3>There are no tenants to display yet</h3>
					)}
				</div>
			</div>
		);
	}
}
{
	/* <TenantDetails
            propertyId={this.props.id}
            loadTenantDetails={this.loadTenantDetails}
        >
            {}
        </TenantDetails> */
}
