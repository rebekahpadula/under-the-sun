import React from 'react';
import styled from 'styled-components';

import SrOnlyHeading from './SrOnlyHeading';

import MenuIcon from '../assets/icon-menu.svg';
import logo from '../assets/under-the-sun-logo.svg';

const Header = styled.section`
    align-items: center;
    background-color: #fff;
    display: flex;
    padding: 10px 10px;
    position: relative;

    @media screen and (min-width: 700px) {
        padding: 10px 20px;
    }
`;

const Nav = styled.nav`
    background-color: #fff;
`;

const NavToggleLink = styled.a`
    text-decoration: none;

    @media screen and (min-width: 700px) {
        display: none;
    }
`;

const NavList = styled.ul`
    display: none;
    list-style: none;
    padding: 0;

    &[data-expand-content="true"] {
        background-color: #fff;
        display: block;
        height: 600vh;
        left: 0;
        margin-top: 100px;
        padding-top: 60px;
        position: absolute;
        text-align: center;
        top: 0;
        width: 100vw;

        @media screen and (min-width: 700px) {
            height: 0;
            margin-top: 0;
            padding-top: 0;
            position: static;
            width: auto;
        }
    }

    @media screen and (min-width: 700px) {
        display: block;
        height: 0;
        position: static;
        margin-top: 0 !important;
    }
`;

const NavItem = styled.li`
    font-size: 24px;
    margin-bottom: 30px;

    @media screen and (min-width: 700px) {
        display: inline-block;
        font-size: 18px;
        margin-bottom: 0;
    }
`;

const NavLink = styled.a`
    color: #1793c7;
    display: block;
    margin: 0 auto;
    padding: 10px;
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
        color: #ff9832;
    }

    @media screen and (min-width: 700px) {
        display: inline-block;
    }
`;

const ToggleIcon = styled.img`
    height: 50px;
    max-height: 50px;
    max-width: 50px;
    vertical-align: middle;
`;

const Logo = styled.img`
    height: 80px;
    width: 80px;
    text-decoration: none;
    margin-right: auto;
`;

export default (props) => {
    return (
        <Header>
            <Logo src={logo}/>
            <Nav>
                <SrOnlyHeading>Primary Navigation</SrOnlyHeading>
                <NavToggleLink href="#" id="toggleLink" aria-label="primary navigation button" onClick={props.toggleNavigation}>
                    <ToggleIcon src={MenuIcon} id="toggleIcon"/>
                </NavToggleLink>
                <NavList className="nav-list" data-expand-content="false">
                    <NavItem><NavLink className="primary-nav__link" href="#short-bio" data-link-active="false" onClick={props.closeMobileNav}>About</NavLink></NavItem>
                    <NavItem><NavLink className="primary-nav__link" href="#shows" data-link-active="false" onClick={props.closeMobileNav}>Shows</NavLink></NavItem>
                    <NavItem><NavLink className="primary-nav__link" href="#media" data-link-active="false" onClick={props.closeMobileNav}>Media</NavLink></NavItem>
                    <NavItem><NavLink  className="primary-nav__link" href="#booking" data-link-active="false" onClick={props.closeMobileNav}>Booking</NavLink></NavItem>
                </NavList>
            </Nav>
        </Header>
    )
}