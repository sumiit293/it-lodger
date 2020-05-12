import {
    GET_TECH,
    DELETE_TECH,
    ADD_TECH,
    SET_LOADING,
    TECHS_ERROR,
    GET_TECHS
} from './action/types'
const initialState = {
    techs: null,
    loading: false,
    error: null
}

export default (state = initialState, action) => {

    switch (action.type) {

        case GET_TECHS:

            return {
                ...state,
                techs: action.payload,
                loading: false
            }

        case DELETE_TECH:

            return {
                ...state,
                techs: state.techs.filter(tech => tech.id !== action.payload),
                loading: false
            }
        case ADD_TECH:
            console.log(action.payload)
            return {
                ...state,
                loading: false
            }
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state
    }
}