import React from 'react';
import './App.css';
import Question from './models/Question'

class App extends React.Component{
  constructor(props){
    super(props)

    this.state={
      questions: [
        {
          'module': 'no',
          'id':1,
          'wbs': [
            {
              'value': "c'est",
            },
            {
              'value': 'un'
            }
          ]
        }
      ]
    }
  }

  render()
  {
    return (
      <Question question={this.state.questions[0]}/>

    );
  }
}

export default App;
this.state={
  question: this.props.question
}