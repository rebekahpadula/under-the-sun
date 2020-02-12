import React from 'react';
import styled from 'styled-components';

import promoVideo from '../assets/Under_The_Sun_Promo.mp4';

import bandPhoto from '../assets/under-the-sun-1.jpg';

const HeroImage = styled.img`
    height: auto;
    width: 100%;
    display: block;
`;

export default (props) => {
    return (
        <video className="video" autoplay="true" muted="true" controls="true" fullscreen="allow">
            <source src={promoVideo} type="video/mp4"/>
        </video>

        // <HeroImage src={bandPhoto}/>
    )
}