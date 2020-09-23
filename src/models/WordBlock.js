import React, { useState } from 'react';
import { useContext } from 'react';
import {displayKanjiContext} from '../contexts/KanjiContext'
import {displayColor, displayColorContext} from '../contexts/ColorContext'

export default function WordBlock(props)
{
  const {color, setColor} = useContext(displayColorContext);
  const {kanji,toggleKanji} = useContext(displayKanjiContext)
  const [displayTrad,setDisplayTrad] =  useState(false)
  
  let toDisplay=props.wb.value;

  if(displayTrad)
  {
    if(props.wb.trad)
    {
      if(kanji && props.wb.trad.kanji)
      {
        toDisplay = props.wb.trad.kanji
      }else if(props.wb.trad){
        toDisplay = props.wb.trad.kana
      }
    }else{
      toDisplay=props.wb.value
    }
  }else{
    toDisplay=props.wb.value
  }
  

  return(
    <button className='wordBlock' style={{backgroundColor:color?props.wb.color:"white"}}
    onMouseLeave={()=>{
      setDisplayTrad(!displayTrad)
    }} onMouseEnter={()=>{
      setDisplayTrad(!displayTrad)

    }}>
        {toDisplay}
    </button>

  )
}
