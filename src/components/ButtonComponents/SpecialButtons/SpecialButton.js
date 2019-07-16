import React from "react";

const SpecialButton = (props) => {
  const {spec} = props
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className={`button special-button`}>{spec}</button>
    </>
  );
};

export default SpecialButton