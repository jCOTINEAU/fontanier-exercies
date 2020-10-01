import React from 'react'
import { displayVersionContext } from '../contexts/VersionContext';
import FormControlLabel from '@material-ui/core/FormControlLabel'
import { Switch } from '@material-ui/core';

function VersionToggler() {
  const {version, toggleVersion}= React.useContext(displayVersionContext);

  return (
    <FormControlLabel labelPlacement="start"
    control={<Switch size="small" checked={version} onChange={(event) =>{toggleVersion(event.target.checked)}} />}
    label={version?"version":"theme"}
  />
 
  );
}

export default VersionToggler;
