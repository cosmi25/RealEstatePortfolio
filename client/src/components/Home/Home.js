import React, { Component } from 'react';
import './Home.css';
import PropertyList from '../PropertyList';
import { Route } from 'react-router-dom';
import API from '../../utils/API';

export default class Home extends Component {
	state = {
		properties: [],
	};

	componentDidMount() {
		//this.loadProperties();
		API.getProperties()
			.then(res => {
				this.setState({ properties: res.data });
			})
			.catch(err => console.log(err));
	}

	loadProperties = () => {
		API.getProperties()
			.then(res => {
				this.setState({ properties: res.data });
			})
			.catch(err => console.log(err));
	};

	render() {
		return (
			<Route
				exact
				path="/"
				render={props => (
					<PropertyList {...props} properties={this.state.properties} />
				)}
			/>
		);
	}
}
