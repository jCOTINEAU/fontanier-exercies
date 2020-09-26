import React from 'react';
import WordBlock from './WordBlock.js';
import {Grid} from '@material-ui/core'

export default class Question extends React.Component {


    render()
    {
        const list = this.props.question.wbs.map((wb,index)=>
            <WordBlock key={this.props.question.id*100+index} wb={wb} />
        )

        return(
            <Grid container justify="center" spacing="2" allignItems="center">
                <Grid container justify="center">
                    <Grid item>
                        <div>question n°:{this.props.question.id}</div>
                    </Grid>
                </Grid>
                {list}
            </Grid>
        )
    }
}
