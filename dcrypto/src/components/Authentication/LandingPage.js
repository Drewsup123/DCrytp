import React from 'react';
import styled from 'styled-components';
import Link from '../StyledLink';

const MainHeader = styled.h1`
    font-size:3rem;
`

const MainDiv = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`

export default function LandingPage(){
    return(
        <MainDiv>
            <MainHeader>This is DCrypto</MainHeader>
            <Link to="/login">Login</Link>
            <Link to="/sign-up">Sign Up</Link>
        </MainDiv>
    )
}