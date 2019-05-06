import React from 'react';
import styled from 'styled-components';
import logo from '../img/logo.png';
import {Store} from '../Store';
import Link from './StyledLink';

const Appbar = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-bottom:40px;
    width:100%;
`;

const Logo = styled.img`
    height:40px;
`;

export default function AppBar(){
    const {state, dispatch} = React.useContext(Store);

    const changeSelected = name => {
        dispatch({type:'Change_Selected', payload:name});
    }
    return(
        <Appbar>

            <Link to="/">
                <Logo src={logo} alt="logo" />
            </Link>
            <div style={{width:"70%"}}/>

            <Link to="/">
                <div 
                    onClick={()=>changeSelected("dashboard")}
                    className={`app-bar-btn ${state.selected === "dashboard" ? "selected" : ""}`}
                >
                Dashboard
                </div>
            </Link>

            <Link to="settings">
                <div 
                    onClick={(e)=>changeSelected("settings")}
                    className={`app-bar-btn ${state.selected === "settings" ? "selected" : ""}`}
                >
                Settings
                </div>
            </Link>

        </Appbar>
    )
}