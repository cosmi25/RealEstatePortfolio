import React from "react";
import "./EditProperty.css";

const EditProperty = props => {
  return (

    <div className="card cards">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <h6 className='heading'>Property Summary</h6>
      <div className="content">
        {props.children}
      </div>
    </div>
  );
}
export default EditProperty;