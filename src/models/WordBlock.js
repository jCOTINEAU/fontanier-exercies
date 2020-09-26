import React, { useState } from 'react';
import { useContext } from 'react';
import { displayKanjiContext } from '../contexts/KanjiContext'
import { displayColorContext } from '../contexts/ColorContext'
import Button from '@material-ui/core/Button'
import {Grid } from '@material-ui/core'

export default function WordBlock(props) {


  const { color } = useContext(displayColorContext);
  const { kanji } = useContext(displayKanjiContext)
  const [displayTrad, setDisplayTrad] = useState(false)

  let toDisplay = props.wb.value;

  if (displayTrad) {
    if (props.wb.trad) {
      if (kanji && props.wb.trad.kanji) {
        toDisplay = props.wb.trad.kanji
      } else if (props.wb.trad) {
        toDisplay = props.wb.trad.kana
      }
    } else {
      toDisplay = props.wb.value
    }
  } else {
    toDisplay = props.wb.value
  }

  return (
   <Grid item>
    <Button className='wordblock' style={{ backgroundColor: color ? props.wb.color ?? 'lightgray' : 'lightgray' }}
      onMouseLeave={() => {
        setDisplayTrad(!displayTrad)
      }} onMouseEnter={() => {
        setDisplayTrad(!displayTrad)

      }}
      onClick={()=>{
        navigator.clipboard.writeText(toDisplay)
      }}>
      {toDisplay}
    </Button>
    </Grid> 
  )
}
