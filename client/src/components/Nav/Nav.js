import React, { Component } from 'react';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
} from 'reactstrap';

export default class TopNav extends Component {
	state = {
		isOpen: false,
	};

	toggle = () => {
		this.setState({
			isOpen: !this.state.isOpen,
		});
	};
	render() {
		return (
			<div>
				<Navbar color="light" light expand="md">
					<NavbarBrand href="/">Real Estate Portfolio</NavbarBrand>
					<NavbarToggler onClick={this.toggle} />
					<Collapse isOpen={this.state.isOpen} navbar>
						<Nav className="mr-auto" navbar>
							<NavItem>
								<NavLink href="/properties/">
									<i className="fas fa-key" /> Properties
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="/dashboard">
									<i className="fas fa-hand-holding-usd" /> &nbsp;
									<i className="fas fa-balance-scale" /> Dashboard
								</NavLink>
							</NavItem>
							<UncontrolledDropdown nav inNavbar>
								<DropdownToggle nav caret>
									<i className="fas fa-shapes" /> Options
								</DropdownToggle>
								<DropdownMenu right>
									<DropdownItem>Option 1</DropdownItem>
									<DropdownItem>Option 2</DropdownItem>
									<DropdownItem divider />
									<DropdownItem>Reset</DropdownItem>
								</DropdownMenu>
							</UncontrolledDropdown>
						</Nav>
					</Collapse>
				</Navbar>
			</div>
		);
	}
}
