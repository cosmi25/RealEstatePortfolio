import React, { Component } from "react";
import API from "../../utils/API";
import EditBtn from "../../components/EditBtn";
import EditOwner from '../../components/EditOwner'
import DeleteBtn from "../../components/DeleteBtn";
import OwnerCard from '../../components/OwnerCard';
import { Col, Row, Container } from "../../components/Grid";
import './Owners.css';

class Owner extends Component {
  state = {
    owners: [],
    owner: {},
    cardLoaded: false
  }

  componentDidMount() {
    this.loadOwners();
    this.state = { cardLoaded: false }
  }

  loadOwners = () => {
    API.getOwners()
      .then((res) => {
        this.setState({ owners: res.data })
      })
      .catch(err => console.log(err));
  };

  viewOwnerDetails = (id) => {
    API.getOwner(id)
      .then((res) => {
        this.setState({ owner: res.data });
      })
      .catch(err => console.log(err));
  }

  loadCard = () => {
    this.setState({ cardLoaded: true })
  }

  unloadCard = () => {
    this.setState({ cardLoaded: false })
  }

  deleteOwner = (id) => {
    API.deleteOwner(id)
      .then((res) => {
        this.loadOwners()
      })
      .catch(err => console.log(err));
    this.unloadCard();
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <div className='container'>
            <h4>Current Owners</h4>
            <hr className='horizontalLine' />
          </div>
        </Row>
        <Row>
          <Col size="md-6 sm-12">
            <div>
              <div className='cardsContainer' >
                {this.state.owners.length ? (
                  <div >
                    {this.state.owners.map(owner => (
                      <EditOwner key={owner._id}>
                        <img style={{ height: 90, width: 150, marginLeft: 10, marginBottom: 20, borderRadius: 20 }} alt='owner img' src='https://cdn.pixabay.com/photo/2017/09/16/17/42/business-woman-2756210__340.jpg' />
                        <p>
                          <strong>Name: </strong>
                          {owner.firstName} <span> </span>
                          {owner.lastName} <br />
                          <strong>Email: </strong>
                          {owner.email}  <br />
                          <strong>Mobile: </strong>
                          {owner.mobile} <br />
                        </p>
                        <EditBtn onClick={() => {
                          this.loadCard();
                          this.viewOwnerDetails(owner._id);
                        }} />
                        <DeleteBtn onClick={() => this.deleteOwner(owner._id)} />
                      </EditOwner>
                    ))}
                  </div>) : (<h4>There are no owners yet</h4>)}

              </div>
            </div>

          </Col>
          <Col size="md-6 sm-12">
            {this.state.cardLoaded &&
              <div className='cardsContainer'>
                <OwnerCard
                  title={this.state.owner.title}
                  firstName={this.state.owner.firstName}
                  lastName={this.state.owner.lastName}
                  email={this.state.owner.email}
                  homePhone={this.state.owner.homePhone}
                  mobile={this.state.owner.mobile}
                  birthDate={this.state.owner.birthDate}
                  note={this.state.owner.note}
                  close={this.unloadCard}
                ></OwnerCard>
              </div>
            }
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Owner;
