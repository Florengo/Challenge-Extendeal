import React from "react";
import { Link } from "react-router-dom";
import style from "./Nav.module.css"
import { useDispatch } from "react-redux";
import { filterByGenres, getPlatforms, filterByPlatforms } from "../actions";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import houseicon from "../images/houseicon.png"
import createproduct from "../images/createproduct.png"
import SearchByName from "./SearchBar"

export default function Nav({paginado}) {
    const dispatch = useDispatch()
    const platforms = useSelector((state) => state.allplatforms)
    const genres = useSelector(state => state.allgenres)
    function handleOnChange(e) {
        dispatch(filterByGenres(e.target.value))
    }
    function handleOnChangePlatforms(e) {
        dispatch(filterByPlatforms(e.target.value))
    }
 


    useEffect(() => {
        dispatch(getPlatforms());
    }, []);


    return (
        <div className={style.nav}>
            <div className={style.icon}>
            <img src={houseicon}alt=""  className={style.houseicon}/>
            <Link to='/home'> Home</Link>
            </div>
            <div className={style.icon}  >
                <img src={createproduct} alt="" className={style.createproduct} />
            <Link to='/createProduct'> Create Product</Link>
            </div>
            <select onChange={(e) => { handleOnChange(e) }}>
                {genres && genres.map(e => {
                    return (
                        <option value={e}>
                            {e}
                        </option>
                    )
                })}
            </select>
            <select onChange={(e) => { handleOnChangePlatforms(e) }}>
                {platforms && platforms.map(e => {
                    return (
                        <option value={e}>
                            {e}
                        </option>
                    )
                })}
            </select>
            <SearchByName paginado={paginado}/>


        </div>
    )
}