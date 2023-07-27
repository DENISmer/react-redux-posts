import {fetchCustomerPostsAction, fetchCustomersAction} from "../store/customerReducer";
import axios from "axios";
import {requestCommentsAction} from "../store/commentsRequests";

export const fetchCustomers = () => {
    return dispatch => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                dispatch(fetchCustomersAction(response.data))
            })
            .catch((e) => {
                alert(`Возникла ошибка: \n${e.message }`)
            })
    }
}

export const fetchPostsOfCustomer = (customer) => {
    console.log(customer)
    return dispatch => {
        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${customer.id}`)
            .then((response) => {
                console.log(response.data)
                dispatch(fetchCustomerPostsAction(response.data))
            })
            .catch((e)=> {
                alert(`Возникла ошибка: \n${e.message }`)
            })
    }
}

export const requestForPostComments = (postId) => {
    return dispatch => {
        axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
            .then((response) => {
                console.log(response.data)
                dispatch(requestCommentsAction(response.data))
            })
            .catch((e)=> {
                alert(`Возникла ошибка: \n${e.message }`)
            })
    }
}
