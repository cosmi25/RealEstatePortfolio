import React, { Component } from 'react';
import API from '../../utils/API';
import './Properties.css';
import NewProperty from '../../components/NewProperty';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
// import EditProperty from '../../components/EditProperty';

export default class Properties extends Component {
	state = {
		properties: [],
	};

	componentDidMount() {
		this.loadProperties();
	}

	loadProperties = () => {
		API.getProperties()
			.then(res => {
				this.setState({ properties: res.data });
			})
			.catch(err => console.log(err));
	};
	deleteProperty = id => {
		API.deleteProperty(id)
			.then(res => {
				this.loadProperties();
				console.log(res);
			})
			.catch(err => console.log(err));
	};

	render() {
		//console.log('rented ' + JSON.stringify(this.state.properties[0]));
		return (
			<div>
				<div>
					<NewProperty loadProperties={this.loadProperties} />
				</div>
				{this.state.properties.length ? (
					<div>
						{this.state.properties.map(item => (
							<div className="card cards">
								<div key={item._id} className="card-header ">
									{/* <Link to={{ pathname: '/property/' + item._id }}> */}
									<Link className="addressLink" to={'/property/' + item._id}>
										{item.address}
									</Link>
									<Button
										style={{ float: 'right' }}
										onClick={() => {
											this.deleteProperty(item._id);
										}}
									>
										Delete Property
									</Button>
									{/* <EditProperty className="editProperty" id={item._id} /> */}
								</div>
								<a href={'/property/' + item._id} className="card-link">
									<img className="card-img-top" alt="propr" src={item.imgUrl} />
								</a>
								<div className="card-footer content">
									{item.beds}&nbsp;
									<i className="fas fa-bed" />
									&nbsp; &nbsp; &nbsp; &nbsp;{item.baths} &nbsp;
									<i className="fas fa-bath" />
									<span style={{ float: 'right' }}>
										<i className="fas fa-users" />
										Currently{' '}
										{item.rented === 'false' ? 'rented' : 'not rented'}
										{/* rented / not: {JSON.stringify(item.rented)} */}
									</span>
									{/* <EditBtn
										type="submit"
										id={item._id}
										onClick={() => {
											this.isLoaded();
											this.loadProperty(item._id);
										}}
									>
										View Details
									</EditBtn> */}
								</div>
							</div>
						))}
					</div>
				) : (
					<h3>There are no properties to display yet</h3>
				)}

				{/* {this.state.properties.length ? (
					<List>
						{this.state.properties.map(property => (
							<ListItem key={property._id}>
								<Link to={'/property/' + property._id}>
									<strong>
										{property.title} by {property.author}
									</strong>
								</Link>
							</ListItem>
						))}
					</List>
				) : (
					<h3>No Results to Display</h3>
				)} */}
			</div>
		);
	}
}

// export default class Properties extends Component {
// 	render() {
// 		console.log(' inside properties ' + this.props.properties);

// 		if (this.props.properties) {
// 			return (
// 				<div>
// 					list of properties {this.props.properties}
// 					{this.props.properties.map(item => (
// 						<div>
// 							inside Prop Summary {item._id}
// 							<div key={item._id} className="card cards">
// 								<div className="card-header ">
// 									<Link
// 										to={{ pathname: '/property/' + item._id }}
// 										id={item._id}
// 										address={item.address}
// 									>
// 										{item.address}
// 									</Link>
// 								</div>
// 								<a
// 									id={item._id}
// 									href={'/property/' + item._id}
// 									className="card-link"
// 								>
// 									<img className="card-img-top" alt="propr" src={item.imgUrl} />
// 								</a>
// 								<div className="card-footer content">
// 									{item.beds}&nbsp;
// 									<i className="fas fa-bed" />
// 									&nbsp; &nbsp; &nbsp; &nbsp;{item.baths} &nbsp;
// 									<i className="fas fa-bath" />
// 									<span style={{ float: 'right' }}>
// 										Currently rented or not: to be finished
// 										<i className="fas fa-users" />
// 									</span>
// 									<EditBtn
// 										type="submit"
// 										id={item._id}
// 										onClick={() => {
// 											this.isLoaded();
// 											this.loadProperty(item._id);
// 										}}
// 									>
// 										View Details
// 									</EditBtn>
// 								</div>
// 							</div>
// 						</div>
// 					))}
// 				</div>
// 			);
// 		} else {
// 			return <div>properties are not loaded</div>;
// 		}

// 		// return (
// 		// 	<div>
// 		// 		<PropertySummary properties={this.props.properties} />
// 		// 	</div>
// 		// );
// 	}
// }
//console.log('properties ' + this.state.properties);
//const [properties] = this.state.properties;
// return (
// 	<div>
// 		properties page
// 		<div>
// 			{/* {item.address}
// 			<img src={item.imgUrl} alt="property" /> */}
// 			<PropertySummary properties={this.state.properties} />
// 		</div>
// 	</div>
// );
