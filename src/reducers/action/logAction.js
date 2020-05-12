import { GET_LOGS, SET_LOADING, LOGS_ERROR, ADD_LOG, SEARCH_LOGS, DELETE_LOG, SET_CURRENT, CLEAR_CURRENT, UPDATE_LOG } from './types'

// export const getLogs = async () => {


//     return async (dispatch) => {
//         setLoading();


//         const res = await fetch("/logs");
//         const data = await res.json();
//         dispatch({
//             type: GET_LOGS,
//             payload: data
//         });
//     }
// }

// Get logs from server
export const getLogs = () => async (dispatch) => {
    try {
        setLoading();
        const res = await fetch('/logs/');
        const data = await res.json();
        dispatch({
            type: GET_LOGS,
            payload: data
        });
    } catch (error) {
        console.log(error)
        dispatch({
            type: LOGS_ERROR,
            payload: error.response
        });
    }
}
// SERACH logs from server
export const searchLogs = (text) => async (dispatch) => {
    try {
        setLoading();
        const res = await fetch(`/logs?q=${text}`);
        const data = await res.json();
        dispatch({
            type: SEARCH_LOGS,
            payload: data
        });
    } catch (error) {
        console.log(error)
        dispatch({
            type: LOGS_ERROR,
            payload: error.response
        });
    }
}

// Add logto server
export const addLog = (log) => async (dispatch) => {
    try {
        setLoading();
        const res = await fetch('/logs', {
            method: 'POST',
            body: JSON.stringify(log),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json();
        dispatch({
            type: ADD_LOG,
            payload: data
        });
    } catch (error) {
        console.log(error)
        dispatch({
            type: LOGS_ERROR,
            payload: error.response.data
        });
    }
}
export const deleteLog = (id) => async (dispatch) => {
    try {
        setLoading();
        await fetch(`/logs/${id}`, {
            method: 'DELETE',
        });

        dispatch({
            type: DELETE_LOG,
            payload: id
        });
    } catch (error) {
        console.log(error)
        dispatch({
            type: LOGS_ERROR,
            payload: error.response.data
        });
    }
}

// set current
export const setCurrent = (log) => {
    return {
        type: SET_CURRENT,
        payload: log
    }
}
// clear current
export const clearCurrent = () => {
    return {
        type: CLEAR_CURRENT
    }
}

// update log 
export const updateLog = (log) => async (dispatch) => {
    try {
        setLoading();

        const res = await fetch(`/logs/${log.id}`, {
            method: 'PUT',
            body: JSON.stringify(log),
            headers: {
                'content-type': "application/json"
            }
        });
        const data = await res.json();
        dispatch({
            type: UPDATE_LOG,
            payload: data
        });
    } catch (error) {
        console.log(error)
        dispatch({
            type: LOGS_ERROR,
            payload: error.response.data
        });
    }
}
//set loading to true
export const setLoading = () => {

    return {
        type: SET_LOADING
    }
}