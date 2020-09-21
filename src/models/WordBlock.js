import React from 'react';

export default class WordBlock extends React.Component{

  render()
  {
      return(
        <button className='wordBlock' onClick={this.props.onClick}>
            {this.props.wb.value}
        </button>

      )
  }

}