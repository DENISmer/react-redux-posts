import {applyMiddleware, combineReducers, createStore} from "redux";
import axios from "axios";
import {URL_S} from "../config";
import { modalWindowReducer} from "./cashReducer";
import {customerReducer} from "./customerReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import {countReducer} from "../Components/saga/countReducer";
import thunk from "redux-thunk";

const defaultRequest = async () => {
    await axios.get(URL_S.ALL_POST)
}


const rootReducer = combineReducers({
    count: countReducer,
    modalPost: modalWindowReducer,
    customers: customerReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
