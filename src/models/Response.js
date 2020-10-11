import React from 'react';
import ResponseBlock from './ResponseBlock.js'
import Grid from '@material-ui/core/Grid';

export default function Response(props)
{
    const versionValue=props.version?"version":"theme"
    const qKey=props.module+versionValue+props.response.response*100;

    const list = props.response.rbs.map((rb,index)=>
    <ResponseBlock key={qKey+index} rb={rb} />
)
    return (
        <Grid container justify="center" spacing="2" allignItems="center">
            {list}
        </Grid>
    )
}