import React, { useState } from 'react'


//import any components needed
import OperatorButton from './OperatorButton'

//Import your array data to from the provided data file
import {operators} from '../../../data'

const Operators = (props) => {
  // STEP 2 - add the imported data to state
  const [operatorState, setOperatorState] = useState(operators)

  const {setScreenTotal, setPreviousTotal, screenTotal, previousTotal, currentOp, setCurrentOp} = props;
  const opClickHandle = (event) =>
  {
    if (event.target.textContent !== '=')
    {
      setPreviousTotal(screenTotal)
      setScreenTotal(event.target.textContent)
      setOperatorState(event.target.textContent)
    }
    else
    {
      
      let result;
      switch(operatorState)
      {
        case('+'):
          result = previousTotal + screenTotal
          break;
        case('-'):
          result = previousTotal - screenTotal
          break
        case('x'):
          result = previousTotal * screenTotal
          break
        case('/'):
          result = previousTotal / screenTotal
          break
        default:
          break;
      }
      setPreviousTotal(0);
      setScreenTotal(result)
      setCurrentOp("=")
    }
  }
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
      component matching the name on the provided file. Pass
      it any props needed by the child component*/}
      {operators.map(op => <OperatorButton op={op} clickHandler={opClickHandle} />)}
    </div>
  );
};

export default Operators