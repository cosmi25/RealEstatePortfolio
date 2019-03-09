import React, { Component } from "react";
import API from "../../utils/API";
import EditBtn from "../../components/EditBtn";
import EditTenant from '../../components/EditTenant';
import TenantCard from '../../components/TenantCard';
import DeleteBtn from "../../components/DeleteBtn";
import { Col, Row, Container } from "../../components/Grid";
import './Tenants.css';

class Tenant extends Component {
  state = {
    tenants: [],
    tenant: {},
    cardLoaded: false
  }

  componentDidMount() {
    this.loadTenants();
    this.state = { cardLoaded: false }
  }

  loadTenants = () => {
    API.getTenants()
      .then((res) => {
        this.setState({ tenants: res.data })
      })
      .catch(err => console.log(err));
  };

  viewTenantDetails = (id) => {
    API.getTenant(id)
      .then((res) => {
        this.setState({ tenant: res.data });
      })
      .catch(err => console.log(err));
  }

  loadCard = () => {
    this.setState({ cardLoaded: true })
  }

  unloadCard = () => {
    this.setState({ cardLoaded: false })
  }

  deleteTenant = (id) => {
    API.deleteTenant(id)
      .then((res) => {
        this.loadTenants()
      })
      .catch(err => console.log(err));
    this.unloadCard();
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <div className='container'>
            <h4>Current Tenants</h4>
            <hr className='horizontalLine' />
          </div>
        </Row>
        <Row>
          <Col size="md-6 sm-12">
            <div>
              <div className='cardsContainer' >
                {this.state.tenants.length ? (
                  <div >
                    {this.state.tenants.map(tenant => (
                      <EditTenant key={tenant._id}>
                        <p>
                          {tenant.firstName} <span> </span>
                          {tenant.lastName} <br />
                          Email {tenant.email}  <br />
                          Mobile {tenant.mobile} <br />
                        </p>
                        <EditBtn onClick={() => {
                          this.loadCard();
                          this.viewTenantDetails(tenant._id);
                        }} />
                        <DeleteBtn onClick={() => this.deleteTenant(tenant._id)} />
                      </EditTenant>
                    ))}
                  </div>) : (<h4>There are no tenants yet</h4>)}
              </div>
            </div>
          </Col>
          <Col size="md-6 sm-12">
            {this.state.cardLoaded &&
              <div className='cardsContainer'>
                <TenantCard
                  title={this.state.tenant.title}
                  firstName={this.state.tenant.firstName}
                  lastName={this.state.tenant.lastName}
                  email={this.state.tenant.email}
                  homePhone={this.state.tenant.homePhone}
                  mobile={this.state.tenant.mobile}
                  birthDate={this.state.tenant.birthDate}
                  note={this.state.tenant.note}
                  close={this.unloadCard}
                ></TenantCard>
              </div>
            }
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Tenant;