import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './components/Home';
import PageNotFound from './components/PageNotFound';
import PropertyDetails from './components/PropertyDetails';
import Portfolio from './pages/Portfolio';
import Properties from './pages/Properties';
import Wrapper from './components/Wrapper';
const App = () => {
	return (
		<Router>
			<div>
				<Nav />
				<Switch>
					<Route exact path="/" component={Portfolio} />
					<Route path="/property/:id" component={PropertyDetails} />
					<Route path="/properties" component={Properties} />
					<Route component={PageNotFound} />
				</Switch>
				<Footer />
			</div>
		</Router>
	);
};
export default App;
