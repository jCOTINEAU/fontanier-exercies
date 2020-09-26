import React from 'react';
import ResponseBlock from './ResponseBlock.js'
import Grid from '@material-ui/core/Grid';

export default function Response(props)
{
    
    const list = props.response.rbs.map((rb,index)=>
    <ResponseBlock key={props.response.id*100+index} rb={rb} />
)
    return (
        <Grid container justify="center" spacing="2" allignItems="center">
            {list}
        </Grid>
    )
}
