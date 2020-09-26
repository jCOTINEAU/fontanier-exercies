import React from 'react'
import { displayKanjiContext } from '../contexts/KanjiContext';
import FormControlLabel from '@material-ui/core/FormControlLabel'
import { Switch } from '@material-ui/core';

function KanjiToggler() {
  const {kanji, toggleKanji}= React.useContext(displayKanjiContext);

  return (
    <FormControlLabel
    control={<Switch size="small" checked={kanji} onChange={(event) =>{toggleKanji(event.target.checked)}} />}
    label={kanji?'漢字':'かんじ'} labelPlacement='start'
  /> 
  );
}
export default KanjiToggler;

