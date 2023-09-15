
const defaultState = {
    currentUser : {},
    currentUserByEmail : {},
}

const CURRENT_USER = `CURRENT_USER`;
const CURRENT_USER_BY_EMAIL = `CURRENT_USER_BY_EMAIL`;
export const currentUserReducer = (state= defaultState,action) => {
    switch (action.type){
        case CURRENT_USER :
            return {...state, currentUser: action.payload};
        case CURRENT_USER_BY_EMAIL :
            return {...state, setCurrentUserByEmail: action.payload}
        default :
            return state
    }
}

export const setCurrentUserAction = (payload) => ({type: CURRENT_USER, payload});

export const setCurrentUserByEmail = (payload) => ({type: CURRENT_USER_BY_EMAIL, payload});
