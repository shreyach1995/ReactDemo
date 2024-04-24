import React from  'react';
import {useState,useEffect} from "react";

export const Text = () => {
    const [text, setText] = useState("");
    useEffect(() => {

    }, []); //what props / states changes we want trigger by using useEffect(). If we wanna excuting an action only once then we can pass the empty []
    return(
        <div>
            <input onChange={(event) => {setText(event.target.value)}} />
            <h1> {text} </h1>
        </div>
    );
};
