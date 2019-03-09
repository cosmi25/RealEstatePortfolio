import React from "react";
import "./OwnerCard.css";

const OwnerCard = props => (
  <div className="card cards position">
    {/* <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div> */}
    <h6 className='heading'>Owner Details</h6>
    <div className="content">
      <p>
        <strong>Title:</strong> {props.title} <br />
        <strong>First Name:</strong> {props.firstName} <br />
        <strong>Last Name:</strong> {props.lastName} <br />
        <strong>Email:</strong> {props.email} <br />
        <strong>HomePhone:</strong> {props.homePhone} <br />
        <strong>Mobile:</strong> {props.mobile} <br />
        <strong>BirthDate:</strong> {props.birthDate} <br />
        <strong>Note:</strong> {props.note} <br />
      </p>
      <span onClick={() => props.close()} className='close'>
        Close
    </span>
    </div>

  </div>
);

export default OwnerCard;