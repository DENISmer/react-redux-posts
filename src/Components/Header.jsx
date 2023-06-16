import {Link} from "react-router-dom";
import {Button, ButtonGroup, Col, Container, Dropdown, Nav, Navbar, NavDropdown, Row} from "react-bootstrap";
import React from 'react';
import burger from '.././icons/menu_FILL0_wght400_GRAD0_opsz48.png'
import avatar from '.././icons/pngwing.com (3).png'
export function Header(){

    const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
        <a
            ref={ref}
            onClick={(e) => {
                e.preventDefault();
                onClick(e);
            }}
        >
            <img src={burger} width={'40px'}/>
        </a>
    ));
    return <>
        <header style={{borderStyle: "solid",borderRadius: '5px',top: "2vh",position: "relative"}}>
            <Container>
                <Row>
                    <Col md={{ span: 1, offset: 0 }}>
                        <Dropdown >
                            <Dropdown.Toggle as={CustomToggle} id="dropdown-basic">
                                react-redux-posts
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href={'/'}>
                                    Главная
                                </Dropdown.Item>

                                <Dropdown.Item href={'/AboutMe'}>
                                    Про меня
                                </Dropdown.Item>

                                <Dropdown.Divider />

                                <Dropdown.ItemText href="#action/3.4">
                                    <a><img src={avatar} width={30} style={{marginTop: '-8px',marginLeft: '-5px'}}></img>
                                        Денис<br/>
                                        rediskink@inbox.ru</a>
                                </Dropdown.ItemText>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                    <Col md={{ span: 2, offset: 4 }}><h4 style={{fontFamily: 'sans-serif',marginTop: "4px"}}>React-redux-app</h4></Col>
                </Row>
            </Container>
        </header>

    </>
}