
import { v4 as uuid } from 'uuid';
const initialState = {
    permanentproducts: [],
    allproducts: [],
    allgenres: [],
    allplatforms: [],
    detail: {},
    alltags: []
}
function rootReducer(state = initialState, action) {
    switch (action.type) {

        case 'GET_PRODUCTS':
            if (state.allproducts.length > 0) {
                return { ...state }
            }
            else {
                return {
                    ...state,
                    allproducts: action.payload,
                    permanentproducts: action.payload
                }
            }



        case 'GET_GENRES':
            return {
                ...state,
                allgenres: action.payload.map(e => e.name)
            }

        case 'GET_PLATFORMS':
            return {
                ...state,
                allplatforms: action.payload.map(e => e.name)
            }

        case 'GET_DETAIL':
            return {
                ...state,
                detail: state.allproducts.find(e => e.id.toString() === action.payload)
            }

        case 'POST_PRODUCT':
            return {
                ...state,
                allproducts: [...state.allproducts, { ...action.payload, id: uuid() }],
                permanentproducts: [...state.permanentproducts, { ...action.payload, id: uuid() }]
            }

        case 'DELETE_PRODUCT':

            return {
                ...state,
                allproducts: state.permanentproducts.filter(e => e.id.toString() !== action.payload),
                permanentproducts: state.permanentproducts.filter(e => e.id.toString() !== action.payload),
                detail: {}
            }

        case 'FILTER_BY_GENRE':

            return {
                ...state,
                allproducts: state.permanentproducts.filter(e => e.genres.some(el => el.name === action.payload))
            }

        case 'FILTER_BY_PLATFORM':
            return {
                ...state,
                allproducts: state.permanentproducts.filter(e => e.platforms.some(el => el.platform.name === action.payload))
            }

        case 'EDIT_PRODUCT':
            const index = state.permanentproducts.findIndex(e => e.id.toString() === action.payload.id)
            let products = state.permanentproducts
            products[index] = action.payload
            return {
                ...state,
                allproducts: products,
                permanentproducts: products
            }

case 'SEARCH_BY_NAME':
    return{
    ...state,
    allproducts: state.permanentproducts.filter( e => e.name.toLowerCase().includes(action.payload.toLowerCase()) )
    }

    case 'GET_TAGS':
    return{
        ...state,
        alltags: action.payload
    }



        default: return state
    }




}

export default rootReducer;