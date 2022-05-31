import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchByName } from "../actions";
import style from './SearchBar.module.css'


export default function SearchByName({paginado}){
const dispatch = useDispatch()
    const [name, setName] = useState("")

    function handleInputChange(e){
    e.preventDefault()
   setName(e.target.value)
   dispatch(searchByName(name))
   paginado(1)
    }

    function handleSubmit(e){
        e.preventDefault()
        dispatch(searchByName(name))
        paginado(1)
    }

    return(
        <div className={style.main}>
            <input type = 'text' 
            placeholder=" Search..."
            onChange={(e) => handleInputChange(e)}/>
            <button onClick={(e) => handleSubmit(e)}>Search</button>
        </div>
    )

}