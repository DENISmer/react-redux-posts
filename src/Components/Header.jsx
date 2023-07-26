import {Link} from "react-router-dom";
import {Button, ButtonGroup, Col, Container, Dropdown, Nav, Navbar, NavDropdown, Row} from "react-bootstrap";
import React from 'react';
// import burger from '.././icons/menu_FILL0_wght400_GRAD0_opsz48.png'
// import avatar from '.././icons/pngwing.com (3).png'
export function Header(){

    const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
        <a
            ref={ref}
            onClick={(e) => {
                e.preventDefault();
                onClick(e);
            }}
        >
            <img src={"https://i.pinimg.com/originals/ee/e0/90/eee0901022943afda255a382cd5231e9.jpg"} width={'40px'}/>
        </a>
    ));
    return <>
        <header style={{gridColumnStart: 1,gridColumnEnd: 4,gridRowStart: 1,gridRowEnd: 4}}>
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
                                    <a><img src={"https://i.pinimg.com/originals/ee/e0/90/eee0901022943afda255a382cd5231e9.jpg"} width={30} style={{marginTop: '-8px',marginLeft: '-5px'}}></img>
                                        Денис<br/>
                                        rediskink@inbox.ru</a>
                                </Dropdown.ItemText>
                            </Dropdown.Menu>
                        </Dropdown>
        </header>

    </>
}
