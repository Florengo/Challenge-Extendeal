import React from "react";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getVideogames } from "../actions";
import Product from "./Product"
import style from './List.module.css'
import Paginado from "./Paginado";

export default function List({ currentProducts, paginado, productsPerPage, allproducts }) {

    return (
        <div className={currentProducts.length > 0 ? style.list : style.gameover}>
            <h1>Extendeal Games</h1>

            {currentProducts.length > 0 ? currentProducts.map(e => {
                return (
                    <Product
                        name={e.name}
                        id={e.id}
                        released={e.released}
                        genres={e.genres.map(e => e.name)}
                        rating={e.rating}
                        rating_top={e.rating_top}
                        platforms={e.platforms[0].platform ? e.platforms.map(e => e.platform.name) : e.platforms.map(e => e.name)}
                        background_image={e.background_image}
                        tags={e.tags}
                    />)
            })
                : <>
                    <h1>👾  GAME OVER  👾</h1>
                    <h1>No games found</h1>
                </>
            }
            <Paginado productsPerPage={productsPerPage} allproducts={allproducts} paginado={paginado} />
        </div>
    )

}