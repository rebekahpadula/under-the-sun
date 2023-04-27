import React from 'react';
import styled from 'styled-components';

import promoVideo from '../assets/uts-2023-promo.MP4';
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
        </div>

    )
}
