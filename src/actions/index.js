import axios from "axios";

export function getProducts() {
    return function (dispatch) {
        axios.get("https://api.rawg.io/api/games?key=4883d0b34cc949c3a08c79941ec309eb&page=3&page_size=40")
            .then(resp => {
                return dispatch({
                    type: 'GET_PRODUCTS',
                    payload: resp.data.results
                })
            })
    }
}

export function getGenres() {
    return function (dispatch) {
        axios.get("https://api.rawg.io/api/genres?key=4883d0b34cc949c3a08c79941ec309eb")
            .then(resp => {
                return dispatch({
                    type: 'GET_GENRES',
                    payload: resp.data.results
                })
            })
    }
}

export function getPlatforms() {
    return function (dispatch) {
        axios.get("https://api.rawg.io/api/platforms?key=4883d0b34cc949c3a08c79941ec309eb")
            .then(resp => {
                return dispatch({
                    type: 'GET_PLATFORMS',
                    payload: resp.data.results
                })
            })
    }
}

export function getDetail(id) {
        return {
            type: 'GET_DETAIL',
            payload: id
        }
    
}


export function deleteProduct(id) {
    return {
        type: 'DELETE_PRODUCT',
        payload: id
    }
}

export function filterByGenres(genre){
    return {
        type: 'FILTER_BY_GENRE',
        payload: genre
    }
}

export function searchByName(name){
    return{
        type: 'SEARCH_BY_NAME',
        payload: name
    }
}

export function filterByPlatforms(platforms){
    return {
        type: 'FILTER_BY_PLATFORM',
        payload: platforms
    }
}



export function postProducts(productInfo) {
    return {
        type: 'POST_PRODUCT',
        payload: productInfo
    }
}

export function editProducts(newinfo){
    return{
        type: 'EDIT_PRODUCT',
        payload: newinfo
    }
}

export function getTags() {
    return function (dispatch) {
        axios.get("https://api.rawg.io/api/tags?key=4883d0b34cc949c3a08c79941ec309eb")
            .then(resp => {
                return dispatch({
                    type: 'GET_TAGS',
                    payload: resp.data.results
                })
            })
    }
}