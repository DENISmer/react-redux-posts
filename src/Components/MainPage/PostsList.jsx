import 'react-bootstrap'
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {Header} from "../Header/Header";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {setEnableAction, setDisableAction} from "../../store/cashReducer";
import {
    addCustomerAction, fetchCustomerPostsAction,
    fetchCustomersAction,
    removeAllCustomerAction,
    removeCustomerAction
} from "../../store/customerReducer";
import {decrementCreator, incrementCreator} from "../saga/countReducer";
import {fetchCustomers, fetchPostsOfCustomer} from "../../requests/customers";
import MainPageStyle from './PostsList.module.css'
import {Footer} from "../Footer/Footer";
import {ModalPostWindow} from "../modalPostWindow/ModalPostWindow";


export function PostsList(){

    const dispatch = useDispatch()

    const modalState = useSelector(state => state.modalPost.active);
    const customers = useSelector(state => state.customers.customers);
    const posts = useSelector(state => state.customers.posts);
    const count = useSelector(state => state.count.count);

    const [inputValue,setInputValue] = useState(0);



    const setEnableModal = (modalState) => {
        dispatch(setEnableAction(modalState))
    }


    const addCustomer = (name) => {
        if (name){
            const customer = {
                name: name,
                id: Date.now(),
            }
            dispatch(addCustomerAction(customer))
        }
        else alert("данные пустые")
    }

    const getCustomer = (customer) =>{
        if (customer){
            dispatch(removeCustomerAction(customer.id))
        }

    }

    const removeAllCustomer = () =>{
        dispatch(removeAllCustomerAction())
    }

    const increment = () => {
        dispatch(incrementCreator())

    }
    const decrement = (count) => {
        dispatch(decrementCreator())
    }

    useEffect(()=>{
        dispatch(fetchCustomers());
    },[])

    return <>
        {modalState ? <ModalPostWindow /> : null}
    <div className={MainPageStyle.page}>
        <Header />
        <div className={MainPageStyle.leftIndent}>left indent</div>
        <div className={MainPageStyle.rightIndent}>right indent</div>


        {/*<Button style={{margin: '3px'}} onClick={() => {removeAllCustomer()}}>remove all customers</Button>*/}

        {/*<Button style={{margin: '3px'}} onClick={() => {dispatch(fetchCustomers())}}>request customers</Button>*/}

        {customers.length > 0 ? <div className={MainPageStyle.userList}>{customers.map((post,index)=>(
            <div key={index} className={MainPageStyle.userInfo} onClick={()=> {
                setEnableModal(!modalState)
            }}>
                <h6>{post.name}</h6>
                <br/>
                <h6> phone: </h6>  {post.title}
                <br/>
                <h6> email: </h6>  {post.body}
                <br/><br/>
                <button>comments</button>
            </div>
        ))}</div> : <div>клиенты отсутствуют</div>}
        {posts.length > 0 &&
            <div className={MainPageStyle.userPostsList}>
                {posts && posts.title}
                {posts && posts.map((post, index) => (
                        <div  key={index}>
                            {'user id: ' + post ? post.userId : null}
                            <br/>
                            {'post id: ' + post.id}
                            <h4>{post.title}</h4>
                            <br/>
                            <span>{post.body}</span>
                        </div>
                    )
                )
                }
            </div>
        }
        <Footer />
    </div>

    </>
}
