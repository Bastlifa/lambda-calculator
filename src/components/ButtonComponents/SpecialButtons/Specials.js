import React, { useState } from 'react'


//import any components needed
import SpecialButton from './SpecialButton'

//Import your array data to from the provided data file
import {specials} from '../../../data'

const Specials = (props) => {
  // STEP 2 - add the imported data to state
  const [specialState, setSpecialState] = useState(specials)
  const {setScreenTotal, setPreviousTotal, screenTotal, previousTotal} = props;

  const specHandler = (event) =>
  {
    if(event.target.textContent === "C")
    {
      setScreenTotal(0)
      setPreviousTotal(0)
    }
    else if(event.target.textContent === "+/-")
    {
      setScreenTotal(-screenTotal)
    }
    else
    {
      setScreenTotal(screenTotal/100.0)
    }
  }

  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
      component matching the name on the provided file. Pass
      it any props needed by the child component*/}
      {specials.map(special => <SpecialButton spec={special} clickHandler={specHandler}/>)}
    </div>
  );
};

export default Specials