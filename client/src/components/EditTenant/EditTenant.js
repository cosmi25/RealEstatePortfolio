import React from "react";
import "./EditTenant.css";

const EditTenant = props => {
  return (

    <div className="card cards">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <h6 className='heading'>Tenant Summary</h6>
      <div className="content">
        {props.children}
      </div>
    </div>
  );
}
export default EditTenant;