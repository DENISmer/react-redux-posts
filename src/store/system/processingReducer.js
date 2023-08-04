import loadingGif from '../../data/icons/processing/loading-thumb.gif'
const defaultState = {
    loading: false,
    loadingGif: loadingGif,
}

const SET_LOADING = `SET_LOADING`;

export const processingReducer = (state= defaultState, action) => {
    switch (action.type){
        case SET_LOADING:
            return {...state, loading: action.payload}
        default:
            return state
    }
}

export const setProcessingAction = (payload) => ({type: SET_LOADING,payload})
