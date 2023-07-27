
 const defaultState = {
    comments : [],
 }

 const REQUEST_COMMENTS = 'REQUEST_COMMENTS';

export const requestCommentsReducer = (state= defaultState,action) => {
    switch (action.type){
        case REQUEST_COMMENTS:
            console.log(action.payload)
            return {...state, comments: [...action.payload]}
        default:
            return state
    }
}

export const requestCommentsAction = (payload) => ({type: REQUEST_COMMENTS, payload})
