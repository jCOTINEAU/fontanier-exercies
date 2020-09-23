import React from 'react'
import { displayColorContext } from '../contexts/ColorContext';

function ColorToggler() {
  const {color, toggleColor}= React.useContext(displayColorContext);

  return (
        <button className='toggler'
          onClick={
            () => toggleColor(!color)
          }>
          colors: {color? "ON" : "OFF"}
        </button>
 
  );
}

export default ColorToggler;
