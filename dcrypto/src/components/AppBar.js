import React from 'react';
import styled from 'styled-components';
import logo from '../img/logo.png'

const Appbar = styled.div`
    padding:20px 5%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-bottom:40px;
`;

const Logo = styled.img`
    height:40px;
    padding-right:60%;
`;

export default function AppBar(){
    return(
        <Appbar>
            <Logo src={logo} alt="logo" />
            <div className="app-bar-btn">Dashboard</div>
            <div className="app-bar-btn">Settings</div>
        </Appbar>
    )
}