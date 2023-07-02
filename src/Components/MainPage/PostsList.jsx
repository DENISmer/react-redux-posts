import 'react-bootstrap'
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {AboutMe} from "../AboutMe";
import {Link} from "react-router-dom";
import {Header} from "../Header";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {addCashAction, getCashAction} from "../../store/cashReducer";
import {addCustomerAction, removeCustomerAction} from "../../store/customerReducer";
import {decrementCreator, incrementCreator} from "../saga/countReducer";

export function PostsList(){
    const dispatch = useDispatch()
    const cash = useSelector(state => state.cash.cash)
    const customers = useSelector(state => state.customers.customers)

    const count = useSelector(state => state.count.count)

    const [inputValue,setInputValue] = useState(0)



    const addCash = (cash) => {
        dispatch(addCashAction(cash))
    }
    const getCash = (cash) =>{
        dispatch(getCashAction(cash))
    }




    const addCustomer = (name) => {
        const customer = {
            name: name,
            id: Date.now(),
        }
        dispatch(addCustomerAction(customer))
    }

    const getCustomer = (customer) =>{
        dispatch(removeCustomerAction(customer.id))
    }

    const increment = () => {
        dispatch(incrementCreator())

    }
    const decrement = (count) => {
        dispatch(decrementCreator())
    }

    return <>
        <Container>
            <Header />
            <br/>
            <Row>
                <Col md={"2"}>
                    <form >
                        <Form.Group>
                            <Form.Label htmlFor="inputPassword5">Password</Form.Label>
                            <Form.Control
                                type={"number"}
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                id="inputPassword5"
                                aria-describedby="passwordHelpBlock"
                            />

                        </Form.Group>
                    </form>
                </Col>
                <Col md={{offset: 1,span: 5}}>
                    <Button style={{margin: '3px'}} onClick={() => {addCash(Number(prompt()))}}>add cash</Button>

                    <Button style={{margin: '3px'}} onClick={() => {getCash(Number(prompt()))}}>get cash</Button>

                    <Button style={{margin: '3px'}} onClick={() => {addCustomer(prompt())}}>add customer</Button>

                    <Button style={{margin: '3px'}} onClick={() => {getCustomer(prompt())}}>get customer</Button>

                    <Button style={{margin: '3px'}} onClick={() => {increment()}}>+</Button>

                    <Button style={{margin: '3px'}} onClick={() => {decrement()}}>-</Button></Col>
            </Row>
            <Row>
                <Col md={{offset: 1,span: 5}}>
                    cash: {cash}<br/> {customers.length > 0 ? <div>клиенты: {customers.map((customer,index)=>(
                        <div style={{cursor: "auto",borderStyle: 'solid', borderRadius: '3px',borderWidth: '1px', padding: '2px',width: "max-content",marginTop: '3px'}} onClick={()=> getCustomer(customer)}>{customer.name}</div>
                ))}</div> : <div>клиенты отсутствуют</div>}
                </Col>
                <Col>
                    {count}
                </Col>
            </Row>
            </Container>

    </>
}