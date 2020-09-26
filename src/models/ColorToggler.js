import React from 'react'
import { displayColorContext } from '../contexts/ColorContext';
import FormControlLabel from '@material-ui/core/FormControlLabel'
import { Switch } from '@material-ui/core';

function ColorToggler() {
  const {color, toggleColor}= React.useContext(displayColorContext);

  return (
    <FormControlLabel labelPlacement="start"
    control={<Switch size="small" checked={color} onChange={(event) =>{toggleColor(event.target.checked)}} />}
    label={"coloration syntaxique :".concat(color?'on':'off')}
  />
 
  );
}

export default ColorToggler;
