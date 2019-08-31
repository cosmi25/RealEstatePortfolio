import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import API from '../../utils/API';
import EditBtn from '../EditBtn';
export default class PropertySummary extends Component {
	state = {
		property: {},
		loaded: false,
	};
	// componentDidMount() {
	// 	//loadProperty(this.props.id);
	// 	API.getProperty(this.props.id)
	// 		.then(res => {
	// 			this.setState({ property: res.data });
	// 		})
	// 		.catch(err => console.log(err));
	// }
	isLoaded = () => {
		this.setState({ loaded: true });
	};
	loadProperty = id => {
		API.getProperty(id)
			.then(res => {
				this.setState({ property: res.data });
			})
			.catch(err => console.log(err));
	};
	render() {
		if (this.props.properties) {
			return (
				<div>
					{this.props.properties.map(item => (
						<div>
							inside Prop Summary {item._id}
							<div key={item._id} className="card cards">
								<div className="card-header ">
									<Link
										to={{ pathname: '/property/' + item._id }}
										id={item._id}
										address={item.address}
									>
										{item.address}
									</Link>
								</div>
								<a
									id={item._id}
									href={'/property/' + item._id}
									className="card-link"
								>
									<img className="card-img-top" alt="propr" src={item.imgUrl} />
								</a>
								<div className="card-footer content">
									{item.beds}&nbsp;
									<i className="fas fa-bed" />
									&nbsp; &nbsp; &nbsp; &nbsp;{item.baths} &nbsp;
									<i className="fas fa-bath" />
									<span style={{ float: 'right' }}>
										Currently rented or not: to be finished
										<i className="fas fa-users" />
									</span>
									<EditBtn
										type="submit"
										id={item._id}
										onClick={() => {
											this.isLoaded();
											this.loadProperty(item._id);
										}}
									>
										View Details
									</EditBtn>
								</div>
							</div>
						</div>
					))}
				</div>
			);
		} else {
			return null;
		}
	}
}
