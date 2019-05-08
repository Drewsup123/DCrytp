import React from 'react';
import {Store} from '../Store';
import styled from 'styled-components';
import Tile from './Settings Components/Tile';

const CoinGrid = styled.div`
    display:flex;
    width:100%;
    flex-wrap:wrap;
    justify-content:space-between;
    flex-direction:row;
`

export default function Settings(){
    const {state} = React.useContext(Store);
    return(
        <CoinGrid>
            {state.coins.length ? state.coins.map(coin => 
            <Tile name={coin.Name} image={`https://www.cryptocompare.com${coin.ImageUrl}`} id={coin.Id} />
            ) : "loading"}
        </CoinGrid>
    )
}