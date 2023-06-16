import {combineReducers, createStore} from "redux";
import axios from "axios";
import {URL_S} from "../config";
import {cashReducer} from "./cashReducer";
import {customerReducer} from "./customerReducer";
import {composeWithDevTools} from "redux-devtools-extension";

const defaultRequest = async () => {
    await axios.get(URL_S.ALL_POST)
}

export const defaultState = {
    cash: 5,
    customer: 2,
}


const rootReduser = combineReducers({
    cash: cashReducer,
    customer: customerReducer,
})

export const store = createStore(rootReduser, composeWithDevTools())