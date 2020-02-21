import React, { useState } from 'react'


//import any components needed
import NumberButton from './NumberButton'

//Import your array data to from the provided data file
import {numbers} from '../../../data'

const Numbers = (props) => {
  // STEP 2 - add the imported data to state
  const {setScreenTotal, setPreviousTotal, screenTotal, previousTotal, currentOp, setCurrentOp} = props;
  const numClickHandle = (event) =>
  {
    if(screenTotal === 0 || ['+','-','x','/'].includes(screenTotal) || currentOp === "=") 
    {
      setCurrentOp('')
      if(event.target.textContent === '.')
      {
        setScreenTotal('0.')
      }
      else
      {
        setScreenTotal(parseFloat(event.target.textContent))
      }
    }
    else
    {
      let stringTot = String(screenTotal);
      stringTot += event.target.textContent;
      setScreenTotal(stringTot)
    }
  }
  const [numberState, setNumberState] = useState(numbers);
  return (
    <div className="number-buttons">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
      component matching the name on the provided file. Pass
      it any props needed by the child component*/}
      {numbers.map((number,index) => <NumberButton number={number} clickHandler={numClickHandle} key={index}/>)}
    </div>
  );
};

export default Numbers