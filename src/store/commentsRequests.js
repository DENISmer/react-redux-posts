
 const defaultState = {
    comments : [],
 }

 const REQUEST_COMMENTS = 'REQUEST_COMMENTS';
 const RM_COMMENTS = 'RM_COMMENTS';

export const requestCommentsReducer = (state= defaultState,action) => {
    switch (action.type){
        case REQUEST_COMMENTS:
            console.log(action.payload)
            return {...state, comments: [...action.payload]}
        case RM_COMMENTS:
            return {...state,comments: []}
        default:
            return state
    }
}

export const requestCommentsAction = (payload) => ({type: REQUEST_COMMENTS, payload})
export const removeCommentsAction = () => ({type: RM_COMMENTS})
