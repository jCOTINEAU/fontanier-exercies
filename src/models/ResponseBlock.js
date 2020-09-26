import React, { useState } from 'react';
import {Grid, Input} from '@material-ui/core'
import { displayKanjiContext } from '../contexts/KanjiContext'
import { useContext } from 'react';

export default function ResponseBlock(props)
{

    const { kanji } = useContext(displayKanjiContext)
    const [lValue, setlValue] = useState("")

    const eqkanji=(lValue===props.rb.kanji)
    const eqkana=(lValue===props.rb.kana)

    let toDisplay='white';
    if((kanji && eqkanji) || (!kanji && eqkana) || (eqkana && !(props.rb.kanji) ))
    {
        toDisplay='lightgreen'
    }else if((kanji && eqkana) || (!kanji && eqkanji))
    {
        toDisplay='orange'
    }else{
        toDisplay='white'
    }

    return(
        <Grid item xs="3" md="1">
        <Input style = {{backgroundColor: toDisplay}} onChange={(event)=>{
            setlValue(event.target.value)
        }} />
        </Grid>
    )
}
