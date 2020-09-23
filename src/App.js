import React, { useState } from 'react';
import './App.css';
import {displayKanjiContext} from './contexts/KanjiContext'
import {displayColorContext} from './contexts/ColorContext'
import Question from './models/Question'
import ColorToggler from './models/ColorToggler';
import KanjiToggler from './models/KanjiToggler';

export default function App(){

    const [questions]=React.useState([
      {
        'module': 'no',
        'id':1,
        'wbs': [
          {
            'value': "c'est",
          },
          {
            'value': 'le',
          },{
            'value': "chat",
            'color': 'green',
            'trad': {
              'kana':'ねこ',
              'kanji':'猫'
            },
          },{
            'value': "de",
          },{
            'value': "link",
            'color': 'yellow',
            'trad':
            {
              'kana':'りンク' 
            },
          },
        ]
      }
    ])

    const [color, toggleColor] = useState(false);
    const value = { color, toggleColor };

    const [kanji , toggleKanji] = useState(false);
    const valueKanji = {kanji, toggleKanji};

    return(
     <displayKanjiContext.Provider value={valueKanji}>
      <displayColorContext.Provider value={value}>
        <div>
          <ColorToggler> </ColorToggler>
          <KanjiToggler> </KanjiToggler>
        </div>
        <div>
          <Question question={questions[0]}/>
        </div>
      </displayColorContext.Provider>
    </displayKanjiContext.Provider>         
    );
  
}

