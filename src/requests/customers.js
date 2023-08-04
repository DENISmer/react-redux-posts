import {
    fetchCustomerAlbumsAction,
    fetchCustomerPostsAction,
    fetchCustomersAction,
    fetchPostsAction
} from "../store/customerReducer";
import axios from "axios";
import {requestCommentsAction} from "../store/commentsRequests";
import {MAIN_URLS, SINGLE_URLS, URL_BY_INFO} from "./config";

export const fetchPosts = () => {
    return dispatch => {
        axios.get(MAIN_URLS.GET_POSTS)
            .then((response) => {
                dispatch(fetchPostsAction(response.data))
            })
            .catch((e) => {
                alert(`Возникла ошибка: \n${e.message }`)
            })
    }
}

export const fetchCustomers = () => {
    return dispatch => {
        axios.get(MAIN_URLS.GET_USERS)
            .then((response) => {
                dispatch(fetchCustomersAction(response.data))
            })
            .catch((e) => {
                alert(`Возникла ошибка \n${e.message }`)
            })
    }
}
export const fetchPostsOfCustomer = (customer) => {
    console.log(customer)
    return dispatch => {
        axios.get(`${URL_BY_INFO.GET_POSTS_BY_USER}${customer}`)
            .then((response) => {
                console.log(response.data)
                dispatch(fetchCustomerPostsAction(response.data));
            })
            .catch((e)=> {
                alert(`Возникла ошибка: \n${e.message }`);
            })
    }
}

export const fetchAlbumsOfCustomer = (customer) => {
    return dispatch => {
        axios.get(`${URL_BY_INFO.GET_ALBUMS_BY_USER}${customer}`)
            .then((response)=> {
                dispatch(fetchCustomerAlbumsAction(response.data));
            })
            .catch((e) => {
                alert(`Возникла ошибка: \n${e.message }`);
            })
    }
}

export const requestForPostComments = (postId) => {
    return dispatch => {
        axios.get(`${URL_BY_INFO.GET_COMMENTS_BY_POST}${postId}`)
            .then((response) => {
                console.log(response.data)
                dispatch(requestCommentsAction(response.data))
            })
            .catch((e)=> {
                alert(`Возникла ошибка: \n${e.message }`)
            })
    }
}
