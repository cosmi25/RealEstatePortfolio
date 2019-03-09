import React from "react";
import "./EditOwner.css";

const EditOwner = props => {
  return (

    <div className="card cards">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <h6 className='heading'>Owner Summary</h6>
      <div className="content">
        {props.children}
      </div>
    </div>
  );
}
export default EditOwner;