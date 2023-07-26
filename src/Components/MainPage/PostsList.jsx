import 'react-bootstrap'
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {Header} from "../Header/Header";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {addCashAction, getCashAction} from "../../store/cashReducer";
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


export function PostsList(){

    const dispatch = useDispatch()

    const cash = useSelector(state => state.cash.cash);
    const customers = useSelector(state => state.customers.customers);
    const posts = useSelector(state => state.customers.posts);
    const count = useSelector(state => state.count.count);

    const [inputValue,setInputValue] = useState(0);



    const addCash = (cash) => {
        dispatch(addCashAction(cash))
    }
    const getCash = (cash) =>{
        dispatch(getCashAction(cash))
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
    <div className={MainPageStyle.page}>
        <Header />
        <div className={MainPageStyle.leftIndent}>left indent</div>
        <div className={MainPageStyle.rightIndent}>right indent</div>
        <Footer />
        {/*<form className={MainPageStyle}>*/}
        {/*    <Form.Group>*/}
        {/*        <Form.Label htmlFor="inputPassword5">Password</Form.Label>*/}
        {/*        <Form.Control*/}
        {/*            type={"number"}*/}
        {/*            value={inputValue}*/}
        {/*            onChange={(e) => setInputValue(e.target.value)}*/}
        {/*            id="inputPassword5"*/}
        {/*            aria-describedby="passwordHelpBlock"*/}
        {/*        />*/}

        {/*    </Form.Group>*/}
        {/*</form>*/}

        {/*<Button style={{margin: '3px'}} onClick={() => {removeAllCustomer()}}>remove all customers</Button>*/}

        {/*<Button style={{margin: '3px'}} onClick={() => {dispatch(fetchCustomers())}}>request customers</Button>*/}

        {customers.length > 0 ? <div className={MainPageStyle.userList}>{customers.map((customer,index)=>(
            <div key={index} className={posts[0] && posts[0].userId === index + 1 ? MainPageStyle.userInfoActive : MainPageStyle.userInfo} onClick={()=> dispatch(fetchPostsOfCustomer(customer))}>
                <h6>{customer.name}</h6>
                <br/>
                <h6> phone: </h6>  {customer.phone}
                <br/>
                <h6> email: </h6>  {customer.email}
                <br/>
                <h6>website:  </h6>  {customer.website}
                <br/>
                <h6> company name: </h6>  {customer.company.name}
                <br/>
                <h6> chatch phrase: </h6> {customer.company.catchPhrase}
                <br/>
                <h6> city: </h6>{customer.address.city}
                <br/>
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

    </div>

    </>
}
