import React, { useState } from 'react';

export default function WordBlock(props)
{
  const [s,setS] =  useState(true)
  return(
    <button className='wordBlock' onMouseLeave={()=>{
      setS(!s)
    }} onMouseEnter={()=>{
      setS(!s)

    }}>
        {s? props.wb.value:props.wb.trad??props.wb.value}
    </button>

  )
}
