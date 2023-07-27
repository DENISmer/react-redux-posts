

const defaultState = {
    active: false,
    title: '',
    body: '',
    postId: 0,
}

const SET_ENABLE = "SET_ENABLE";
const SET_DISABLE = "SET_DISABLE";

export const modalWindowReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_ENABLE:
            console.log(action.payload)
            return {active: true,title: action.payload.title,body: action.payload.body,postId: action.payload.postId}
        case SET_DISABLE:
            return {active: false,title: action.payload.title,body: action.payload.body,postId: action.payload.postId}
        default:
            return state
    }
}

export const setEnableAction = (payload) => ({type: SET_ENABLE, payload})
export const setDisableAction = (payload) => ({type: SET_DISABLE,payload})
