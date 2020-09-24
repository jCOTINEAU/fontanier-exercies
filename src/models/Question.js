import React from 'react';
import WordBlock from './WordBlock.js';
import { makeStyles } from '@material-ui/core/styles';

export default class Question extends React.Component {

    renderWb(i)
    {
        return(
            <WordBlock wb={this.props.question.wbs[i]}>
            </WordBlock>
        )
    }

    render()
    {
        const list = this.props.question.wbs.map((wb)=>
            <WordBlock wb={wb} />
        )

        return(
            <div className="Question">
                {list}
            </div>


        )
    }
}
