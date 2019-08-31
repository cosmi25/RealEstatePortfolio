import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './PropertyList.css';
// import API from '../../utils/API';
import { Col, Row } from 'reactstrap';

export default class PropertyList extends Component {
	render() {
		console.log(this.props.properties);
		return (
			<div>
				list of properties{' '}
				{/* {this.props.cards.map(item => (
					<div>{item.name}</div>
				))} */}
				{this.props.properties}
			</div>

			// {props.properties ? (<div>	hello</div>) : ({return null})}
			// <div className='container-fluid'>
			// <div>

			// </div>
			// </div>
			// <div className="card cards">
			// 	<div className="card-header ">
			// 		<Link to={{ pathname: '/property/' + props.address }} id={props.id}>
			// 			{props.address}
			// 		</Link>
			// 	</div>
			// 	<a href={'/property/' + props.address} className="card-link">
			// 		<img className="card-img-top" alt="propr" id={props.id} src={props.img} />
			// 	</a>
			// 	<div className="card-footer content">
			// 		{props.beds}&nbsp;
			// 		<i className="fas fa-bed" />
			// 		&nbsp; &nbsp; &nbsp; &nbsp;{props.baths} &nbsp;
			// 		<i className="fas fa-bath" />
			// 		<span style={{ float: 'right' }}>
			// 			Currently rented or not: to be finished
			// 			<i className="fas fa-users" />
			// 		</span>
			// 	</div>
			// </div>
		);
	}
}

{
	/* <Container fluid>
<Row>
	<Col size="lg-6 sm-12">
		<div className="card cards">
			<div className="card-header ">
				<a href={'/properties/' + this.props.id} className="card-link">
					{this.props.address}
				</a>
			</div>
			<img className="card-img-top" alt="propr" src={this.props.img} />
			<div className="card-footer content">
				{this.props.beds}
				<i className="fas fa-bed" />
				{this.props.baths}
				<i className="fas fa-shower" />
			</div>

			<button
				onClick={() => {
					//console.log('clicked');
					<Link to="/property" id={this.props.id} />;
					// this.viewPropertyDetails(this.props.id);
				}}
			>
				View Details
			</button>
		</div>
	</Col>
</Row>
</Container> */
}

{
	/* <Container fluid>
				<Row>
					<Col size="lg-6 sm-12 ">
						<div className="cardsContainer border border-danger offset-1">
							{this.state.properties.length ? (
								<div>
									{this.state.properties.map(property => (
										<PropertySummary
											id={property._id}
											key={property._id}
											img={property.imgUrl}
											address={property.address}
											beds={property.beds}
											baths={property.baths}
											//property={property}
										/>
									))}
								</div>
							) : (
								<h3>You Have No Properties Yet</h3>
							)}
						</div>
					</Col>
				</Row>
			</Container> */
}
