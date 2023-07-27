

const defaultState = {
    active: false,
}

const SET_ENABLE = "SET_ENABLE";
const SET_DISABLE = "SET_DISABLE";

export const modalWindowReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_ENABLE:
            return {active: true}
        case SET_DISABLE:
            return {active: false}
        default:
            return state
    }
}

export const setEnableAction = (payload) => ({type: SET_ENABLE, payload})
export const setDisableAction = (payload) => ({type: SET_DISABLE,payload})
