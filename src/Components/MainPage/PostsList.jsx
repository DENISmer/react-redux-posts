import 'react-bootstrap'
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {AboutMe} from "../AboutMe";
import {Link} from "react-router-dom";
import {Header} from "../Header";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";

export function PostsList(){
    const dispatch = useDispatch()
    const cash = useSelector(state => state.cash.cash)
    const customer = useSelector(state => state.customer.customer)
    const [inputValue,setInputValue] = useState(0)

    const addCash = (cash) => {
        dispatch({type: "ADD_CASH",payload: cash})
    }
    const getCash = (cash) =>{
        dispatch({type: "GET_CASH",payload: cash})
    }

    let localCash;
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
                                <Button onClick={() => {addCash(Number(prompt()))}}>add cash</Button>
                            <Button onClick={() => {getCash(Number(prompt()))}}>get cash</Button>
                        </Form.Group>
                    </form>
                </Col>
            </Row>
            <Row>
                <Col>
                    cash: {cash}<br/>customer: {customer}
                </Col>
            </Row>
            </Container>

    </>
}