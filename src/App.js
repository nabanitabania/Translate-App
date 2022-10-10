import { useState } from 'react';
import './App.css';
import Field from './components/input-fields/input-fields'; 
import Language from './components/language/language';
import Translate from './components/translate/translate';

function App() {

  const [text,setText] = useState('')
  const [language, setLanguage] = useState('en')
  return (
    <div className="App">
      <Field onChange={setText} />
      <Language onChange={setLanguage} />
      <Translate text={text} language={language} />
    </div>
  );
}

export default App;
