import React, { useState } from 'react';
import './App.css';
import { displayKanjiContext } from './contexts/KanjiContext'
import { displayColorContext } from './contexts/ColorContext'
import Question from './models/Question'
import Response from './models/Response'
import ColorToggler from './models/ColorToggler';
import KanjiToggler from './models/KanjiToggler';
import 'fontsource-roboto';
import Grid from '@material-ui/core/Grid';
import data from './data/theme/no/questions.json';
import responseData from './data/theme/no/response.json';
import Button from '@material-ui/core/Button'

export default function App() {

  const [questions] = React.useState(data.questions)
  const [responses] = React.useState(responseData.responses)
  let [activeQr,setActiveQr] = React.useState(0);

  const [color, toggleColor] = useState(false);
  const value = { color, toggleColor };

  const [kanji, toggleKanji] = useState(false);
  const valueKanji = { kanji, toggleKanji };


  return (
    <div>
      <displayKanjiContext.Provider value={valueKanji}>
        <displayColorContext.Provider value={value}>
          <Grid container justify="center">
            <Grid item>
              <ColorToggler> </ColorToggler>
            </Grid>
            <Grid item>
              <KanjiToggler> </KanjiToggler>
            </Grid>
          </Grid>
          <Question question={questions[activeQr]} />
          <Response response={responses[activeQr]}></Response>
          <Grid container justify="center">
            <Grid item>
            <Button color="secondary" onClick={()=>{
              setActiveQr(Math.abs(--activeQr%questions.length))
            }}>
              précedent
            </Button>
            </Grid>
            <Grid item>
            <Button color="primary" onClick={()=>{
              setActiveQr((++activeQr%questions.length))
            }}>
              suivant
            </Button>
            </Grid>
          </Grid>
        </displayColorContext.Provider>
      </displayKanjiContext.Provider>
    </div>
  );

}

