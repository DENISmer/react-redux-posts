
const defaultState = {
    currentUser : {},
}

const CURRENT_USER = `CURRENT_USER`;
export const currentUserReducer = (state= defaultState,action) => {
    switch (action.type){
        case CURRENT_USER :
            return {...state, currentUser: action.payload};
        default :
            return state
    }
}

export const setCurrentUserAction = (payload) => ({type: CURRENT_USER,payload})
