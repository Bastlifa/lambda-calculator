import React from "react";

const NumberButton = (props) => {
  const {number, clickHandler} = props;
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className={number === "0" ? `button number-button zero-button` : `button number-button`} onClick={clickHandler}>{number}</button>
    </>
  );
};

export default NumberButton
