import React from "react";
import "./style.css";
function Heading(props) {
  const apper={
    color: "tomato",
    fontSize: "40px"
  }
      return (
          <h1 style={apper}>Firsr Name is ,{props.firstName}</h1>
      )
  }
  
  export default Heading;