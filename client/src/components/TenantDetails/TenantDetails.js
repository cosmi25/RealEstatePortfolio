import React, { Component } from 'react';
import { CardText } from 'reactstrap';
import API from '../../utils/API';

export default class TenantDetails extends Component {
	// state = { tenants: [] };
	// componentDidMount() {
	// 	// API.getTenants()
	// 	// 	.then(res => {
	// 	// 		//console.log('id ' + this.props.match.params.id);
	// 	// 		this.setState({ tenants: res.data });
	// 	// 	})
	// 	// 	.catch(err => console.log(err));
	// 	this.getTenantDetails();
	// 	console.log('tenants length' + this.state.tenants.length);
	// }
	// getTenantDetails = () => {
	// 	API.getTenants()
	// 		.then(res => {
	// 			//console.log('id ' + this.props.match.params.id);
	// 			this.setState({ tenants: res.data });
	// 		})
	// 		.catch(err => console.log(err));
	// };
	render() {
		return (
			<div>
				<h5>
					<span>
						<i className="fas fa-users" />
					</span>{' '}
					Current Tenants
				</h5>

				{/* <div>
					{this.state.tenants.length ? (
						<div>
							{this.state.tenants.map(tenant => {
								<CardText>{this.state.tenants.length}</CardText>;
							})}
						</div>
					) : (
						<h3>No Results to Display</h3>
					)}
				</div> */}
			</div>
		);
	}
}
