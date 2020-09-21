import React from 'react';
import WordBlock from './WordBlock.js';

export default class Question extends React.Component {
    constructor(props)
    {
        super(props)


    }

    

    renderWb(i)
    {
        return(
            <WordBlock wb={this.state.question.wbs[i]}>
            </WordBlock>
        )
    }


    render()
    {
        return(
            <div className="Question">
                {this.renderWb(0)}
                {this.renderWb(1)}
            </div>


        )
    }
}