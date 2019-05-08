import React from 'react';
import styled from 'styled-components';

const TileContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width:8%;
    border:1px solid black;
    height:100px;
    border-radius:10px;
    padding:10px;
`
const TileImg = styled.img`
    height:50px;
    width:50px;
`
const H3 = styled.h3`
    text-align:"center", 
    padding-right:10px" 
    border-right:1px solid black
`

export default function Tile(props){
    return(
        <TileContainer>
            <H3>{props.name}</H3>
            <TileImg src={props.image} alt="crypto logo" />
        </TileContainer>
    )
}