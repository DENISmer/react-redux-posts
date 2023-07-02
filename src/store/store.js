import {combineReducers, createStore} from "redux";
import axios from "axios";
import {URL_S} from "../config";
import {cashReducer} from "./cashReducer";
import {customerReducer} from "./customerReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import {countReducer} from "../Components/saga/countReducer";

const defaultRequest = async () => {
    await axios.get(URL_S.ALL_POST)
}


const rootReducer = combineReducers({
    count: countReducer,
    cash: cashReducer,
    customers: customerReducer,
})

export const store = createStore(rootReducer, composeWithDevTools())