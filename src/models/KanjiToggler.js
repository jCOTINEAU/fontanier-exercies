import React from 'react'
import { displayKanjiContext } from '../contexts/KanjiContext';

function KanjiToggler() {
  const {kanji, toggleKanji}= React.useContext(displayKanjiContext);

  return (
        <button className='toggler'
          onClick={
            () => toggleKanji(!kanji)
          }>
          kanji: {kanji? "ON" : "OFF"}
        </button>
 
  );
}
export default KanjiToggler;

