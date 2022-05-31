import React from "react";
import style from './Product.module.css'
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";


export default function Product({ name, id, released, genres, rating, background_image, platforms,tags }) {

    let genresText = genres.map(e => e.toUpperCase() + ', ')
    genresText[genresText.length - 1] =  genresText[genresText.length - 1].slice(0, -2)
    return (
        <Link to={`/detail/${id}`}>
            <div className={style.card}>
                <img src={background_image} alt='img not found' />
                <div className={style.rightSide}>
                    <h1> {name}</h1>
                    <div className={style.letters}>
                        <h2>{released} | {genresText} | {rating} ☆</h2>
                        <h2> Tags </h2>
                        <h2> {tags.map(e => e.name + ' ')}</h2>
                    </div>
                </div>


            </div>
        </Link>
    )
}