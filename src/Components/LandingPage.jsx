import React from "react";
import { Link } from "react-router-dom";
import style from "./LandingPage.module.css"
import gif from "../images/cat.gif"
import zelda from "../images/zelda.gif"

export default function LandingPage({history}) {
    return (
        <div className={style.landing}>
            <img src={gif} alt="" /> 
            <img src={zelda}  className={style.zelda} alt="" />
            <h1>Welcome!</h1>
            <Link to='/home'>
                Enter
            </Link>
        </div>
    )
}