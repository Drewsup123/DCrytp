import React from 'react';
import styled from 'styled-components';
import { Link as L} from 'react-router-dom';

const Link = styled(L)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

export default Link;