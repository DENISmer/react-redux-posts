import 'react-bootstrap'
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {Header} from "../../Header/Header";
import {useDispatch, useSelector} from "react-redux";
import {Suspense, useEffect, useState, lazy} from "react";
import {setEnableAction, setDisableAction} from "../../../store/cashReducer";
import {
    addCustomerAction, fetchCustomerPostsAction,
    fetchPostsAction,
    removeAllCustomerAction,
    removeCustomerAction
} from "../../../store/customerReducer";
import {decrementCreator, incrementCreator} from "../../saga/countReducer";
import {fetchPosts, fetchPostsOfCustomer} from "../../../requests/customers";
import MainPageStyle from './PostsList.module.css'
import {Footer} from "../../Footer/Footer";
// import {ModalPostWindow} from "../../modalPostWindow/ModalPostWindow";
import commentIcon from '../../../data/icons/main page/comments.svg'
import {NavBar} from "../../Navbar/NavBar";
import {useNavigate} from "react-router";


export default function PostsList(){

    const dispatch = useDispatch();
    const navigate = useNavigate();


    const modalState = useSelector(state => state.modalPost);
    const customers = useSelector(state => state.customers.customers);
    const posts = useSelector(state => state.customers.posts);
    const count = useSelector(state => state.count.count);

    const [currentPost,setCurrentPost] = useState({title: '',body:'',id: 0});

    const ModalPostWindow = lazy(() =>
        import("../../modalPostWindow/ModalPostWindow")
    )
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
        dispatch(fetchPosts());
    },[])

    return <>
    {modalState.active ? <Suspense fallback={
        <div>
            <h1>Loading...</h1>
        </div>
    }>
        <ModalPostWindow />
    </Suspense> : null}

    <div className={modalState.active ? MainPageStyle.activeModal : MainPageStyle.page}>

        <div className={MainPageStyle.leftIndent}>left indent<NavBar /></div>
        <div className={MainPageStyle.rightIndent}>right indent</div>


        {posts.length > 0 ? <div className={MainPageStyle.userList}>{posts.map((post,index)=>(
            <div key={post.id} className={MainPageStyle.userInfo} onClick={()=> {
                setEnableModal({active: !modalState.active,
                                title: post.title,
                                body: post.body,
                                postId: post.id}) }}>
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
