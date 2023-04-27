import React from 'react';
import styled from 'styled-components';

const SrOnlyHeading = styled.h1`
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0,0,0,0);
    border: 0;
`;

export default (props) => {
    return (
        <SrOnlyHeading></SrOnlyHeading>
    )
}
