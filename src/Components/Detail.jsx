import React from "react";
import { getDetail } from "../actions";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Nav from './Nav'
import loadingGif from '../images/loading_12.gif'
import { deleteProduct } from "../actions";
import { Link } from "react-router-dom";
import style from './Detail.module.css';

export default function Detail({ match, history }) {
    const id = match.params.id
    const dispatch = useDispatch()
    const infoId = useSelector(state => state.detail)
    useEffect(() => {
        dispatch(getDetail(id))
    }, [])
    console.log(infoId)
    function handleOnClick(id) {
        dispatch(deleteProduct(id))
        history.push('/home')
    }
    return (
        infoId.name ?
            <div className={style.detail}>
                <Nav></Nav>
                <div className={style.info}>
                    <div className={style.block}>
                        <button onClick={() => handleOnClick(id)}> Delete </button>
                     <button className={style.edit}>  <Link  to={`/edit/${id}`}> Edit </Link></button> 
                        <h1> {infoId.name}</h1>
                        <h2>{infoId.rating} / 5</h2>
                        <h2>{infoId.released}</h2>
                        <h2>{infoId.genres.map(e => e.name)}</h2>
                        <h2>{infoId.platforms[0].platform ? infoId.platforms.map(e => e.platform.name) : infoId.platforms.map(e => e.name)}</h2>
                        <img src={infoId.background_image} alt="Img not found" width='300px' />
                    </div>
                </div>
            </div>
            :
            <img src={loadingGif} alt="Img not found" />
    )
}