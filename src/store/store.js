import {applyMiddleware, combineReducers, createStore} from "redux";
import axios from "axios";
import {URL_S} from "../config";
import { modalWindowReducer} from "./cashReducer";
import {customerReducer} from "./customerReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import {countReducer} from "../Components/saga/countReducer";
import thunk from "redux-thunk";
import {requestForPostComments} from "../requests/customers";
import {requestCommentsReducer} from "./commentsRequests";
import {currentUserReducer} from "./currentUserReducer";
import {processingReducer} from "./system/processingReducer";

const defaultRequest = async () => {
    await axios.get(URL_S.ALL_POST)
}


const rootReducer = combineReducers({
    comments: requestCommentsReducer,
    count: countReducer,
    modalPost: modalWindowReducer,
    customers: customerReducer,
    userProcess : currentUserReducer,
    system : processingReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
