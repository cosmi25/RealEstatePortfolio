import React from "react";
import "./List.css";

export const List = ({ children }) => {
  return (
    <div>
      <ul>
        {children}
      </ul>
    </div>
  );
};
{/* <div className="list-overflow-container"></ul>
      <ul className="list-group"> */}