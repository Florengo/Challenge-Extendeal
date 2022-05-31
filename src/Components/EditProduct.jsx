import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { editProducts, getGenres, getPlatforms, getDetail, getTags } from '../actions/index'
import { useDispatch, useSelector } from "react-redux";
import loadingGif from '../images/loading_12.gif'
import style from './EditProduct.module.css'
import Nav from "./Nav";


function validate(input) {
    let errors = {};
    if (!input.name) {
        errors.name = 'Name is required'
    }
    else if (!input.released) {
        errors.released = 'Released is required'
    }
    else if (!input.platforms.length) {
        errors.platforms = 'Platforms is required'
    }
    else if (!input.genres.length) {
        errors.genres = 'Genres is required'
    }
    else if (!input.rating) {
        errors.rating = 'Rating is required'
    }
    else if (!input.tags.length) {
        errors.tags= 'Tags is required'
    }
    else if (!input.background_image) {
        errors.background_image = 'Img is required'
    }
    return errors;
}
export default function EditProduct({ match, history }) {
    const id = match.params.id
    const dispatch = useDispatch();
    const genres = useSelector((state) => state.allgenres)
    const detailedit = useSelector((state) => state.detail)
    const tags = useSelector((state) => state.alltags)
    const platforms = useSelector((state) => state.allplatforms)
    const [errors, setErrors] = useState({});

    const [input, setInput] = useState({
        name: detailedit.name,
        released: detailedit.released,
        platforms: detailedit.platforms,
        rating: detailedit.rating,
        background_image: detailedit.background_image,
        genres: detailedit.genres,
        tags: detailedit.tags,
        id: id
    })

    function handleChange(e) {
        if (e.target.name === "genres" || e.target.name === "platforms" || e.target.name === "tags") {
            setInput({
                ...input,
                [e.target.name]: [...input[e.target.name], { name: e.target.value }]
            })
        }
        else {
            setInput({
                ...input,
                [e.target.name]: e.target.value

            })
        }
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }))
    }

    function handleOnSubmit(e) {
        e.preventDefault()
        dispatch(editProducts(input))
        alert('¡Product succesfully edited!')
        history.push('/home')
    }




    useEffect(() => {
        dispatch(getGenres());
        dispatch(getPlatforms());
        dispatch(getTags());
        dispatch(getDetail(id))
    }, []);

console.log(input)

    return (

        detailedit.name ?
        <div className={style.editproduct}>
            <div  className={style.blur}>
                <Nav />
                <h1>Edit product</h1>
                <form className={style.input}>
                    <div  >
                        <label> Name</label>
                        <input
                            type='text'
                            value={input.name}
                            name='name'
                            onChange={handleChange} />

                        {errors.name && (
                            <p className="error"> {errors.name}</p>
                        )}

                    </div>

                    <div className={style.div}>
                        <label> Released </label>
                        <input
                            type='text'
                            value={input.released}
                            name='released'
                            onChange={handleChange} />

                        {errors.released && (
                            <p className="error"> {errors.released}</p>
                        )}

                    </div>

                    <div >
                        <label> Platforms </label>
                        <select name="platforms" onChange={handleChange}>
                            {platforms && platforms.map(e => {
                                return (
                                    <option value={e}> {e}</option>
                                )
                            })}
                        </select>
                        {errors.name && (
                            <p className="error"> {errors.platforms}</p>
                        )}

                    </div>
                    <div >
                        <label> Tags </label>
                        <select name="tags" onChange={handleChange}>
                            {tags && tags.map(e => {
                                return (
                                    <option value={e.name}> {e.name}</option>
                                )
                            })}
                        </select>
                        {errors.name && (
                            <p className="error"> {errors.tags}</p>
                        )}

                    </div>

                    <div>
                        <label> Rating </label>
                        <input
                            type='number'
                            value={input.rating}
                            name='rating'
                            onChange={handleChange} />

                        {errors.rating && (
                            <p className="error"> {errors.rating}</p>
                        )}

                    </div>
                

                    <div >
                    
                        <div className={style.div}>
                            <label> Image </label>
                            <input
                                type='text'
                                value={input.background_image}
                                name='background_image'
                                onChange={handleChange} />

                            {errors.background_image && (
                                <p className="error"> {errors.background_image}</p>
                            )}

                        </div>

                        <div >
                            <label> Genres </label>
                            <select name="genres" onChange={handleChange}>
                                {genres && genres.map(e => {
                                    return (
                                        <option value={e}> {e}</option>
                                    )
                                })}
                            </select>

                            {errors.genres && (
                                <p className="error"> {errors.genres}</p>
                            )}

                        </div>

                    </div>
                    <button  className={style.button}type='submit' onClick={handleOnSubmit} disabled={errors.name || errors.rating || errors.rating_top || errors.released || errors.background_image || errors.genres || errors.platforms}> Create Product </button>
                </form>
                </div>
            </div>

            :
            <img src={loadingGif} alt="Img not found" />


    )
}
