import React from 'react';
import WordBlock from './WordBlock.js';
import {Grid} from '@material-ui/core'

export default class Question extends React.Component {


    render()
    {
        const versionValue=this.props.version?"version":"theme"
        const qKey=this.props.module+versionValue+this.props.question.question*100;

        const list = this.props.question.wbs.map((wb,index)=>
            <WordBlock key={qKey+index} wb={wb} />
        )

        return(
            <Grid container justify="center" spacing="2" allignItems="center">
                <Grid container justify="center">
                    <Grid item>
                        <div>question n°:{this.props.question.question}</div>
                    </Grid>
                </Grid>
                {list}
            </Grid>
        )
    }
}
