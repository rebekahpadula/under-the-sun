import React from 'react';
import styled from 'styled-components';

import promoVideo from '../assets/Under_The_Sun_Promo.mp4';
import poster from '../assets/uts-logo-2020.jpeg';
import playIcon from '../assets/icon-play.svg';
import bandPhoto from '../assets/under-the-sun-1.jpg';

const HeroImage = styled.img`
    height: auto;
    width: 100%;
    display: block;
`;

export default (props) => {
    return (
        <div className="video-wrapper">
            <video className="video" controls="true" fullscreen="allow">
                <source src={promoVideo} type="video/mp4"/>
            </video>
            <button className="video-button" aria-label="video play/pause button"><img className="video-button__image" src={playIcon}/></button>
        </div>

        // <HeroImage src={bandPhoto}/>
    )
}