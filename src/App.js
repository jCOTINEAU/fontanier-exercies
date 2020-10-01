import React, { useState } from 'react';
import './App.css';
import { useEffect } from 'react';
import { displayKanjiContext } from './contexts/KanjiContext'
import { displayColorContext } from './contexts/ColorContext'
import { displayModuleContext} from './contexts/ModuleContext'
import { displayVersionContext } from './contexts/VersionContext';

import Question from './models/Question'
import Response from './models/Response'

import 'fontsource-roboto';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button'
import TopBar from './models/TopBar';

export default function App() {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const [questions, setQuestions] = React.useState([])
  const [responses, setResponses] = React.useState([])
  let [activeQr, setActiveQr] = React.useState(0);

  const [color, toggleColor] = useState(false);
  const value = { color, toggleColor };

  const [kanji, toggleKanji] = useState(false);
  const valueKanji = { kanji, toggleKanji };

  const [version, toggleVersion] = useState(false);
  const valueVersion = { version, toggleVersion };

  const [module, toggleModule] = useState("no");
  const valueModule = { module, toggleModule };

  useEffect(() => {
    if(!isLoaded && !error)
    {
      fetch("https://raw.githubusercontent.com/jCOTINEAU/fontanier-exercies/data/data/theme/"+module+"/questions.json")
      .then(res => res.json())
      .then(
        (result) => {
          setQuestions(result.questions);
          setResponses(result.responses);
          setIsLoaded(true);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
    }

  }, [isLoaded,error,module])

  if (error) {
    return <div>Erreur : {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Chargement...</div>;
  } else {
    return (
      <div>
        <displayKanjiContext.Provider value={valueKanji}>
          <displayColorContext.Provider value={value}>
            <displayVersionContext.Provider value={valueVersion}> 
              <displayModuleContext.Provider value={valueModule}>


              <TopBar></TopBar>


              <Question question={questions[activeQr]} />
              <Response response={responses[activeQr]}></Response>



              <Grid container justify="center">
                <Grid item>
                  <Button color="secondary" onClick={() => {
                    setActiveQr(Math.abs(--activeQr % questions.length))
                  }}>
                    précédent
              </Button>
                </Grid>
                <Grid item>
                  <Button color="primary" onClick={() => {
                    setActiveQr((++activeQr % questions.length))
                  }}>
                    suivant
              </Button>
                </Grid>
              </Grid>




             </displayModuleContext.Provider>
            </displayVersionContext.Provider>
          </displayColorContext.Provider>
        </displayKanjiContext.Provider>
      </div>
    );
  }

}

