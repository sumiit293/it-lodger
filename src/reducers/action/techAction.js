import {
    GET_TECH,
    DELETE_TECH,
    ADD_TECH,
    SET_LOADING,
    TECHS_ERROR,
    GET_TECHS
} from './types'

// Get Techs
export const getTechs = () => async (dispatch) => {
    try {
        setLoading();
        const res = await fetch('/techs');
        const data = await res.json();
        dispatch({
            type: GET_TECHS,
            payload: data
        });
    } catch (error) {
        console.log(error)
        dispatch({
            type: TECHS_ERROR,
            payload: error.response.statusText
        });
    }
}

export const addTech = (tech) => async (dispatch) => {
    try {
        setLoading();
        console.log(tech)
        const res = await fetch('/techs', {
            method: "POST",
            body: JSON.stringify(tech),
            headers: {
                "Content-Type": "application/json"
            }
        });
        const data = await res.json();
        dispatch({
            type: ADD_TECH,

        });
    } catch (error) {
        console.log(error)
        dispatch({
            type: TECHS_ERROR,
            payload: error.response.statusText
        });
    }
}
export const deleteTech = (id) => async (dispatch) => {
    try {
        setLoading();
        console.log(id)
        await fetch(`/techs/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });

        dispatch({
            type: DELETE_TECH,
            payload: id

        });
    } catch (error) {
        console.log(error)
        dispatch({
            type: TECHS_ERROR,
            payload: error.response.statusText
        });
    }
}
//set loading to true
export const setLoading = () => {
    return {
        type: SET_LOADING
    }
}