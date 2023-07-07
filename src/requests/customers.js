import {fetchCustomerPostsAction, fetchCustomersAction} from "../store/customerReducer";
import axios from "axios";

export const fetchCustomers = () => {
    return dispatch => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                dispatch(fetchCustomersAction(response.data))
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
    }
}