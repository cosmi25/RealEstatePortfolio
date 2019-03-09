import React, { Component } from "react";
import API from "../../utils/API";
import PropertyCard from "../../components/PropertyCard";
import EditBtn from "../../components/EditBtn";
import DeleteBtn from "../../components/DeleteBtn";
import { Col, Row, Container } from "../../components/Grid";
import EditProperty from "../../components/EditProperty/EditProperty";
import './Properties.css';


export default class Properties extends Component {
  state = {
    properties: [],
    property: {},
    loaded:false,
    images: ['https://image.shutterstock.com/image-photo/beautiful-exterior-newly-built-luxury-260nw-529108441.jpg'

    ]
  };

  componentDidMount() {
    this.loadProperties();
    this.state ={loaded:false}
  }

  loadProperties = () => {
    API.getProperties()
      .then((res) => {
        console.log('return from loadProperties fct ' + res.data[0]._id)
        this.setState({ properties:res.data})
      })
      .catch(err => console.log(err));
      
  };

  viewPropertyDetails = (id) => {
    API.getProperty(id)
    .then((res) => {
      console.log(res.data)
     this.setState({property:res.data});
    // console.log('state update' + this.state.property.country)
    })
    .catch(err => console.log(err));

  }

  loadCard = () => {
    this.setState({loaded: true})
  }
  unloadCard =() => {
    this.setState({loaded: false})
  }
  

  deleteProperty = (id) => {
    API.deleteProperty(id)
    .then((res) => {
      this.loadProperties()
    })
    .catch(err => console.log(err));
    this.unloadCard();
    console.log('properties length ' + this.state.properties.length)
    
  }

  render() {
    return (
      <Container fluid>
      <Row>
        {/* <Col size="md-6 sm-12"> */}
        <div className='container'>
        <h4>Your Properties</h4>
          <hr className='horizontalLine' />
        </div>
        {/* </Col> */}
        
    
      </Row>
        <Row className='position'>
          <Col size="md-6 sm-12">
          <div className='cardsContainer' >
          
          {this.state.properties.length ? (
            <div >
 {this.state.properties.map(property => (
                  <EditProperty   key={property._id}>
                    {/* <a href={"/properties/" + property._id}>
                      <strong>
                        {property.address}
                      </strong>
                    </a> */}
                  

                    
                    <p className='p'>
                    {property.address} <br /> 
                        {property.beds} beds  <br /> 
                        {property.baths} baths   <br /> 
                        {property.sqft} sqft   <br /> 
                    </p>
                   
                    {/* <ViewBtn onClick={() => this.viewPropertyDetails(property._id)} /> */}
                    <EditBtn onClick={() => 
                      {
                        this.loadCard();
                        this.viewPropertyDetails(property._id);
                      }} />
                    <DeleteBtn onClick={() => this.deleteProperty(property._id)} />
                  </EditProperty>
                ))}
            </div>) : (<h3>You Have No Properties Yet</h3>)}

          </div>
          </Col>
          <Col size="md-6 sm-12">
            {this.state.loaded &&
              <div className='cardsContainer'>              
                <PropertyCard
                  image={this.state.property.img}
                  country={this.state.property.country}
                  address={this.state.property.address}
                  city={this.state.property.city}
                  zipcode={this.state.property.zipcode}
                  state={this.state.property.state}
                  beds={this.state.property.beds}
                  baths={this.state.property.baths}
                  sqft={this.state.property.sqft}
                  note={this.state.property.note}
                  close={this.unloadCard}
                ></PropertyCard>
              </div>
            }
          </Col>
        </Row>
      </Container>
    );
  }
}


//                     {this.state.properties.length ? (
//               <List>
// {/* <Wrapper> */}
//                 {this.state.properties.map(property => (
//                   <ListItem key={property._id}>
//                     <a href={"/properties/" + property._id}>
//                       <strong>
//                         {property.address}
//                       </strong>
//                     </a>
//                     <p>
//                         {property.beds} beds   
//                         {property.baths} baths   
//                         {property.sqft} sqft   
//                     </p>
//                     {/* <ViewBtn onClick={() => this.viewPropertyDetails(property._id)} /> */}
//                     <EditBtn onClick={() => 
//                       {
//                         this.loadCard();
//                         this.viewPropertyDetails(property._id);
//                       }} />
//                     <DeleteBtn onClick={() => this.deleteProperty(property._id)} />
//                   </ListItem>
//                 ))}
//                 {/* </Wrapper> */}
//               </List>
//             ) : (
//               <h3>No Results to Display</h3>
//             )}