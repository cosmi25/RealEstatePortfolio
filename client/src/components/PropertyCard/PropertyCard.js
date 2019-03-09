import React from "react";
import "./PropertyCard.css";

const PropertyCard = props => (
  <div className="card cards position">
    <h6 className='heading'>Property Details</h6>
    <div>
      <img style={{ height: 200, marginLeft: 20, marginBottom: 20, borderRadius: 20 }} alt={props.name} src={props.image} />
    </div>

    <div className="content">
      <p>
        <strong>Country:</strong> {props.country} <br />
        <strong>Address:</strong> {props.address} <br />
        <strong>City:</strong> {props.city} <br />
        <strong>Zipcode:</strong> {props.zipcode} <br />
        <strong>State:</strong> {props.state} <br />
        <strong>Beds:</strong> {props.beds} <br />
        <strong>Baths:</strong> {props.baths} <br />
        <strong>Total Sqft:</strong> {props.sqft} <br />
        <strong>Note:</strong> {props.note} <br />
      </p>
      <span onClick={() => props.close()} className='close'>
        Close
    </span>
    </div>

  </div>
);

export default PropertyCard;