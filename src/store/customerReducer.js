
const defaultState = {
    customers: [],
    posts: [],
    albums: [],
    photos: [],
}

const ADD_CUSTOMER = "ADD_CUSTOMER";
const REMOVE_CUSTOMER = "REMOVE_CUSTOMER";
const REMOVE_ALL_CUSTOMERS = "REMOVE_ALL_CUSTOMERS";
const REQUEST_POSTS = "REQUEST_POSTS";
const REQUEST_CUSTOMER_POSTS = 'REQUEST_CUSTOMER_POSTS';
const REQUEST_CUSTOMERS = 'REQUEST_CUSTOMERS';
const REQUEST_CUSTOMER_ALBUMS = 'REQUEST_CUSTOMER_ALBUMS';
const REQUEST_CUSTOMER_PHOTOS = 'REQUEST_CUSTOMER_PHOTOS';

export const customerReducer = (state = defaultState, action) => {
    switch (action.type) {
        case REQUEST_CUSTOMER_POSTS:
            console.log(action.payload)
            return {...state,posts: [...action.payload]};
        case REQUEST_CUSTOMER_ALBUMS:
            return {...state,albums: [...action.payload]}
        case REQUEST_POSTS:
            return {...state,posts: [...action.payload]};
        case REQUEST_CUSTOMERS:
            return {...state, customers: [...action.payload]};
        case ADD_CUSTOMER:
            return {...state,customers: [...state.customers, action.payload]};
        case REMOVE_CUSTOMER:
            return {...state,customers: state.customers.filter((customer) => customer.id !== action.payload)};
        case REMOVE_ALL_CUSTOMERS:
            return {...state,customers: []};
        case REQUEST_CUSTOMER_PHOTOS:
            return {...state,photos: [state.albums,...action.payload]}
        default:
            return state;
    }
}

export const addCustomerAction = (payload) => ({type: ADD_CUSTOMER, payload})
export const removeCustomerAction = (payload) => ({type: REMOVE_CUSTOMER, payload})

export const fetchCustomersAction = (payload) => ({type: REQUEST_CUSTOMERS, payload})
export const fetchPostsAction = (payload) => ({type: REQUEST_POSTS,payload})
export const removeAllCustomerAction = () => ({type: REMOVE_ALL_CUSTOMERS})

export const fetchCustomerPostsAction = (payload) => ({type: REQUEST_CUSTOMER_POSTS,payload})

export const fetchCustomerAlbumsAction = (payload) => ({type: REQUEST_CUSTOMER_ALBUMS, payload})

export const fetchPhotosByAlbumAction = (payload) => ({type: REQUEST_CUSTOMER_PHOTOS, payload});
