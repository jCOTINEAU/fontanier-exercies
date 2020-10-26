import React, { useState } from 'react';
import { useContext } from 'react';
import { displayKanjiContext } from '../contexts/KanjiContext'
import { displayColorContext } from '../contexts/ColorContext'
import Button from '@material-ui/core/Button'
import {Grid } from '@material-ui/core'
import { WORD_COLOR } from '../models/enum/Color'

export default function WordBlock(props) {


  const { color } = useContext(displayColorContext);
  const { kanji } = useContext(displayKanjiContext)
  const [onHover, setonHover] = useState(false)

  let toDisplay = props.wb.origin;

  var colorToDisplay = props.wb.type ? WORD_COLOR[props.wb.type] : 'lightgray'

  if(kanji)
  {
    if(onHover)
    {
      toDisplay=props.wb.onHoverAlternate??props.wb.onHover??props.wb.origin
    }else{
      toDisplay=props.wb.alternate??props.wb.origin
    }
  }else{
    if(onHover){
      toDisplay=props.wb.onHover??props.wb.origin
    }
  }

  return (
   <Grid item>
    <Button className='wordblock' style={{ backgroundColor: color ? colorToDisplay: 'lightgray' }}
      onMouseLeave={() => {
        setonHover(!onHover)
      }} onMouseEnter={() => {
        setonHover(!onHover)
      }}
      onClick={()=>{
        navigator.clipboard.writeText(toDisplay)
      }}>
      {toDisplay}
    </Button>
    </Grid> 
  )
}
