import React,{useState,useEffect} from "react";
import axios from "axios";
import "./styles/language.css"

function Language({onChange}) {
    const [languageList,setLanguagesList] = useState([])
    useEffect(() => {
        axios.get(`https://libretranslate.de/languages`)
            .then((response) => {
                setLanguagesList(response.data)
            })
    }, [])
    return (
        <div>
            <label for="language">Choose your desired language:</label>
            <br></br>
            <select name="language" onChange={event => onChange(event.target.value)}>
                {languageList.map(language =>{
                    return (
                        <option value={language.code}>{language.name}</option>
                    )
                })}
            </select>
        </div>
      );
}

export default Language;