import React,{useState} from "react";
import axios from 'axios'
import "./styles/translate.css"

function Translate({text,language}) {
    const [detectedLang, setDetectedLang] = useState('')
   
    const [translatedText,setTranslatedText] = useState('')
    const getLanguageSource = () => {
        axios.post(`https://libretranslate.de/detect`, {
            q: text
        }).then((response) => {
                setDetectedLang(response.data[0].language)
            })
    }
    

    const translateText = () => {
        getLanguageSource();
    
            let data = {
                q : text,
                source: detectedLang,
                target: language
            }
            axios.post(`https://libretranslate.de/translate`, data)
            .then((response) => {
                setTranslatedText(response.data.translatedText)
            })
    }
    return (
        <div>
            <button onClick={translateText}>Click to Translate</button>
            <br></br>
            <label id="translate">Translated text:</label>
            <h1>{translatedText}</h1>
        </div>
      );
}

export default Translate;