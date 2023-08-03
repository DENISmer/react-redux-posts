import {Link} from "react-router-dom";
import {Button, ButtonGroup, Col, Container, Dropdown, Nav, Navbar, NavDropdown, Row} from "react-bootstrap";
import React from 'react';
import header from './Header.module.css'


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
        <header className={header.header}>
            <img src={'https://images.hdqwalls.com/download/lake-reflections-4k-wide-2560x1080.jpg'}></img>

        </header>

    </>
}
