import React, { Component } from "react";
import NewBtn from "../../components/NewBtn";
import TenantBtn from '../../components/TenantBtn';
import OwnerBtn from '../../components/OwnerBtn';
import { Col, Row, Container } from "../../components/Grid";
import { Input, TextArea, FormBtn } from "../../components/Form";
import API from "../../utils/API";
import './Dashboard.css';

class Home extends Component {
    state = {
        property: {
            country: "",
            address: "",
            city: "",
            zipcode: "",
            state: "",
            beds: "",
            baths: "",
            sqft: "",
            note: ""
        },
        tenant: {
            title: '',
            firstName: '',
            lastName: '',
            email: '',
            homePhone: '',
            mobile: '',
            birthDate: '',
            note: ''
        },
        owner: {
            title: '',
            firstName: '',
            lastName: '',
            email: '',
            homePhone: '',
            mobile: '',
            birthDate: '',
            note: ''
        },
        tenantFormLoaded: false,
        ownerFormLoaded: false,
        propertyFormLoaded: false

    };

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    resetFormProperty = () => {
        this.setState({
            property: {
                country: "",
                address: "",
                city: "",
                zipcode: "",
                state: "",
                beds: "",
                baths: "",
                sqft: "",
                note: ""
            },
            propertyFormLoaded: false
        })
    }

    resetFormTenant = () => {
        this.setState({
            title: '',
            firstName: '',
            lastName: '',
            email: '',
            homePhone: '',
            mobile: '',
            birthDate: '',
            note: ''
            ,
            tenantFormLoaded: false,
        })
    }
    resetFormOwner = () => {
        this.setState({
            title: '',
            firstName: '',
            lastName: '',
            email: '',
            homePhone: '',
            mobile: '',
            birthDate: '',
            note: '',
            ownerFormLoaded: false,
        })
    }

    handleSubmitProperty = (event) => {
        event.preventDefault();
        API.saveProperty(this.state)
            .then(function (response) {
                console.log(response);
            })
        this.resetFormProperty();
    }

    handleSubmitOwner = (event) => {
        event.preventDefault();
        API.saveOwner(this.state)
            .then(function (response) {
                console.log(response);
            })
        this.resetFormOwner();
    }

    handleSubmitTenant = (event) => {
        event.preventDefault();
        API.saveTenant(this.state)
            .then(function (response) {
                console.log(response);
            })
        this.resetFormTenant();
    }

    propertyLoadForm = () => {
        this.setState({ propertyFormLoaded: true })
    }
    tenantLoadForm = () => {
        this.setState({ tenantFormLoaded: true })
    }

    ownerLoadForm = () => {
        this.setState({ ownerFormLoaded: true })
    }

    render() {
        return (
            //
            <Container fluid>
                <Row>
                    <div className='cardContainer'>
                        <h6 className='card miniCard expenses'> Upcoming Expenses </h6>
                        <h6 className='card miniCard rent'> Upcoming Rent </h6>
                        <h6 className='card miniCard cashflow'> CashFlow </h6>
                    </div>
                </Row>
                <Row>
                    <Col size="md-6 sm-12">
                        <div className='cardContainer'>
                            <div className='newPropr card'>
                                <h6>Properties</h6>
                                <img className='img' src="https://image.shutterstock.com/image-photo/stock-image-south-florida-single-260nw-154456190.jpg" alt="new property" />
                                <NewBtn onClick={() => this.propertyLoadForm()} ></NewBtn>
                            </div>

                            <div className='newPropr card'>
                                <h6>Owners</h6>
                                <img className='img' src="https://cdn.pixabay.com/photo/2017/05/18/11/04/key-2323278__340.jpg" alt="occupancy" />
                                <OwnerBtn onClick={() => this.ownerLoadForm()}></OwnerBtn>
                            </div>
                        </div>

                        <div className='cardContainer'>
                            <div className='newPropr card'>
                                <h6>Rent </h6>
                                <img className='img' src="https://image.shutterstock.com/image-photo/minature-houses-resting-on-pound-260nw-424211692.jpg" alt="rent" />
                                <div className='rentCard'>
                                    <p>Collected</p>
                                    <p>Overdue</p>
                                </div>
                            </div>

                            <div className='newPropr card'>
                                <h6>Occupancy</h6>
                                <img className='img' src="https://image.shutterstock.com/image-photo/young-couple-viewing-house-female-260nw-317837381.jpg" alt="occupancy" />
                                <div>
                                    <p>Tenanted</p>
                                    <p>Untenanted</p>
                                </div>
                                <TenantBtn onClick={() => this.tenantLoadForm()}></TenantBtn>
                            </div>
                        </div>
                    </Col>
                    <Col size="md-6 sm-12">
                        {this.state.propertyFormLoaded &&
                            <form className='form'>
                                <h6 className='heading'>Enter the details for the new property</h6>
                                <Input value={this.state.country} onChange={this.handleInputChange} name="country" placeholder="Country (required)" />
                                <Input value={this.state.address} onChange={this.handleInputChange} name="address" placeholder="Address (required)" />
                                <Input value={this.state.city} onChange={this.handleInputChange} name="city" placeholder="City (Optional)" />
                                <Input value={this.state.zipcode} onChange={this.handleInputChange} name="zipcode" placeholder="Zipcode (required)" />
                                <Input value={this.state.state} onChange={this.handleInputChange} name="state" placeholder="State (Optional)" />
                                <Input value={this.state.beds} onChange={this.handleInputChange} name="beds" placeholder="Number beds (Optional)" />
                                <Input value={this.state.baths} onChange={this.handleInputChange} name="baths" placeholder="Number baths (Optional)" />
                                <Input value={this.state.sqft} onChange={this.handleInputChange} name="sqft" placeholder="Total sqft (Optional)" />
                                <TextArea value={this.state.note} onChange={this.handleInputChange} name="note" placeholder="Enter a note for the property (Optional)" className='textArea' />
                                <FormBtn onClick={this.handleSubmitProperty}>Add Property</FormBtn>
                            </form>}
                        {this.state.tenantFormLoaded &&
                            <form className='form'>
                                <h6 className='heading'>Enter the tenant's info</h6>
                                <Input value={this.state.title} onChange={this.handleInputChange} name="title" placeholder="Title" />
                                <Input value={this.state.firstName} onChange={this.handleInputChange} name="firstName" placeholder="First Name (required)" />
                                <Input value={this.state.lastName} onChange={this.handleInputChange} name="lastName" placeholder="Last Name (required)" />
                                <Input value={this.state.email} onChange={this.handleInputChange} name="email" placeholder="Email (Optional)" />
                                <Input value={this.state.homePhone} onChange={this.handleInputChange} name="homePhone" placeholder="Home Phone Nr (Optional)" />
                                <Input value={this.state.mobile} onChange={this.handleInputChange} name="mobile" placeholder="Mobile Number (Optional)" />
                                <Input value={this.state.birthDate} onChange={this.handleInputChange} name="birthDate" placeholder="Date of Birth (Optional)" />
                                <TextArea value={this.state.note} onChange={this.handleInputChange} name="note" placeholder="Enter a note for the property (Optional)" className='textArea' />
                                <FormBtn onClick={this.handleSubmitTenant}>Add Tenant</FormBtn>
                            </form>}

                        {this.state.ownerFormLoaded &&
                            <form className='form'>
                                <h6 className='heading'>Enter the owner's info</h6>
                                <Input value={this.state.title} onChange={this.handleInputChange} name="title" placeholder="Title" />
                                <Input value={this.state.firstName} onChange={this.handleInputChange} name="firstName" placeholder="First Name (required)" />
                                <Input value={this.state.lastName} onChange={this.handleInputChange} name="lastName" placeholder="Last Name (required)" />
                                <Input value={this.state.email} onChange={this.handleInputChange} name="email" placeholder="Email (Optional)" />
                                <Input value={this.state.homePhone} onChange={this.handleInputChange} name="homePhone" placeholder="Home Phone Nr (Optional)" />
                                <Input value={this.state.mobile} onChange={this.handleInputChange} name="mobile" placeholder="Mobile Number (Optional)" />
                                <Input value={this.state.birthDate} onChange={this.handleInputChange} name="birthDate" placeholder="Date of Birth (Optional)" />
                                <TextArea value={this.state.note} onChange={this.handleInputChange} name="note" placeholder="Enter a note for the property (Optional)" className='textArea' />
                                <FormBtn onClick={this.handleSubmitOwner}>Add Owner</FormBtn>
                            </form>}
                    </Col>
                </Row>
            </Container>
        );
    }
}
export default Home;
