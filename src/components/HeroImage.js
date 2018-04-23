import React from 'react';
import styled from 'styled-components';

// import bandPhoto from '../assets/band-photo-7.jpg';

import bandPhoto from '../assets/under-the-sun-1.jpg';

const HeroImage = styled.img`
    height: auto;
    width: 100%;
    display: block;
`;

export default (props) => {
    return (
        <HeroImage src={bandPhoto}/>
    )
}