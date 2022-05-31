import List from "./Lists";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getGenres, getProducts } from "../actions";
import { useSelector } from "react-redux";
import { useState } from "react";
import Paginado from "./Paginado"
import Nav from "./Nav"
import style from './Home.module.css'
import loadingGif from '../images/loading_12.gif'





export default function Home() {
    const allproducts = useSelector((state) => state.allproducts)
    const permaproducts = useSelector((state) => state.permanentproducts)
    const genres = useSelector((state) => state.allgenres)
    const dispatch = useDispatch()
    const [currentPage, setCurrentPage] = useState(1)
    const productsPerPage = 8
    const indexOfLastProduct = currentPage * productsPerPage //8
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage //8
    const currentProducts = allproducts.slice(indexOfFirstProduct, indexOfLastProduct)

    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    console.log(allproducts)

    useEffect(() => {
        dispatch(getProducts())
        dispatch(getGenres())
    }, [dispatch])


    return (
        permaproducts.length > 0 && genres.length > 0 ?
            <div className={style.home}>
                <Nav paginado={paginado}/>
                <List currentProducts={currentProducts} productsPerPage={productsPerPage} allproducts={allproducts} paginado={paginado}/>
            </div >
            :
            <img src={loadingGif} alt="Img not found" />
    )




}