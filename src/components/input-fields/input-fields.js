import React from "react";
import "./styles/input-field.css"

function Field({onChange}) {
    return (
        <div>
            <h1 className="header">Translate Application</h1>
            <label id="label" for="text">Enter your text to Translate: </label>
            <br></br>
            <input type="text" id="input" name="text" onChange={event => onChange(event.target.value)}></input>
        </div>
      );
}

export default Field;