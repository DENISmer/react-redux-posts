import 'react-bootstrap'
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {Header} from "../../Header/Header";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {setEnableAction, setDisableAction} from "../../../store/cashReducer";
import {
    addCustomerAction, fetchCustomerPostsAction,
    fetchCustomersAction,
    removeAllCustomerAction,
    removeCustomerAction
} from "../../../store/customerReducer";
import {decrementCreator, incrementCreator} from "../../saga/countReducer";
import {fetchCustomers, fetchPostsOfCustomer} from "../../../requests/customers";
import MainPageStyle from './PostsList.module.css'
import {Footer} from "../../Footer/Footer";
import {ModalPostWindow} from "../../modalPostWindow/ModalPostWindow";
import commentIcon from '../../../data/icons/main page/comments.svg'
import {NavBar} from "../../Navbar/NavBar";
import {useNavigate} from "react-router";


export function PostsList(){

    const dispatch = useDispatch();
    const navigate = useNavigate();


    const modalState = useSelector(state => state.modalPost);
    const customers = useSelector(state => state.customers.customers);
    const posts = useSelector(state => state.customers.posts);
    const count = useSelector(state => state.count.count);

    const [currentPost,setCurrentPost] = useState({title: '',body:'',id: 0});


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
        {modalState.active ? <ModalPostWindow /> : null}
        <NavBar />
    <div className={modalState.active ? MainPageStyle.activeModal : MainPageStyle.page}>
        {/*<Header />*/}

        <div className={MainPageStyle.leftIndent}>left indent</div>
        <div className={MainPageStyle.rightIndent}>right indent</div>



        {/*<Button style={{margin: '3px'}} onClick={() => {removeAllCustomer()}}>remove all customers</Button>*/}

        {/*<Button style={{margin: '3px'}} onClick={() => {dispatch(fetchCustomers())}}>request customers</Button>*/}

        {customers.length > 0 ? <div className={MainPageStyle.userList}>{customers.map((post,index)=>(
            <div key={post.id} className={MainPageStyle.userInfo} onClick={()=> {
                setEnableModal({active: !modalState.active,
                                title: post.title,
                                body: post.body,
                                postId: post.id});

                //setCurrentPost({title: post.title,body: post.body, id: post.id})
            }}>
                <br/>
                <h4>{post.title}</h4>
                <br/>
                <h5>{post.body}</h5>
                <br/><br/>
                <button><img src={commentIcon} width={'20px'}/></button>

            </div>
        ))}</div> : <div>клиенты отсутствуют</div>}
        {/*{posts.length > 0 &&*/}
        {/*    <div className={MainPageStyle.userPostsList}>*/}
        {/*        {posts && posts.title}*/}
        {/*        {posts && posts.map((post, index) => (*/}
        {/*                <div  key={index}>*/}
        {/*                    {'user id: ' + post ? post.userId : null}*/}
        {/*                    <br/>*/}
        {/*                    {'post id: ' + post.id}*/}
        {/*                    <h4>{post.title}</h4>*/}
        {/*                    <br/>*/}
        {/*                    <span>{post.body}</span>*/}
        {/*                </div>*/}
        {/*            )*/}
        {/*        )*/}
        {/*        }*/}
        {/*    </div>*/}
        {/*}*/}
        <Footer />
    </div>

    </>
}
