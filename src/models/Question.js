import React from 'react';
import WordBlock from './WordBlock.js';
import {Grid} from '@material-ui/core'

export default class Question extends React.Component {


    render()
    {
        const list = this.props.question.wbs.map((wb,index)=>
            <WordBlock key={this.props.question.id+index} wb={wb} />
        )

        return(
            <Grid container justify="center" spacing="2" allignItems="center">
                {list}
            </Grid>
        )
    }
}
