import React from "react";

const OperatorButton = (props) => {
  const {op, clickHandler} = props
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className={`button operator-button`} onClick={clickHandler}>{op.char}</button>
    </>
  );
};

export default OperatorButton