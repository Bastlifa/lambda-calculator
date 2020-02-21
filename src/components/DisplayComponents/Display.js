import React from "react";

// import './display.css'
const Display = (props) => {
  const {displayVal} = props;
  return ( 
    <div className={`display`}>
      <p>{displayVal}</p>
    </div>
  )
};

export default Display