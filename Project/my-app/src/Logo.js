import React from "react";
import menken_text from './menken_text.png';
import "./index.css";
import { render } from "react-dom";

function Logo() {
    return <img src={menken_text} 
    width={200} height={200}
    alt="our logo" 
    position= 'absolute'
    />;
} 

export default Logo;