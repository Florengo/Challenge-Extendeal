import React from "react";
import style from './Paginado.module.css'

export default function Paginado({ productsPerPage, allproducts, paginado }) {
    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(allproducts.length / productsPerPage); i++) { //divido todos los pj por los personajes por pagina que quiero.
        pageNumbers.push(i)
    }
    return (
        <div>
            <ul className={style.paginado}>
                {pageNumbers && pageNumbers.map(number => {
                    return (
                        <button className={style.number} key={number} onClick={() => paginado(number)}>
                            {number}
                        </button> 
                    )
                })}
            </ul>
        </div>
    )
}