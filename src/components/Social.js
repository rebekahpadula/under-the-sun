import React from 'react';
import styled from 'styled-components';

import SrOnlyHeading from './SrOnlyHeading';

import facebookIcon from '../assets/icon-fb.svg';
import instagramIcon from '../assets/icon-ig.svg';
import youtubeIcon from '../assets/icon-yt.svg';

const Social = styled.section`
    text-align: center;
    padding: 0 5px;
    background-color: #000;
`;

const SocialIconsList = styled.ul`
    list-style: none;
    padding: 0;
    margin-top: -5px;
`;

const SocialIconsItem = styled.li`
    display: inline-block;
`;

const SocialIconsLink = styled.a``;

const SocialIconsImage = styled.img`
    height: 50px;
`;



export default (props) => {
    return (
        <Social>
            <SrOnlyHeading>Social media links</SrOnlyHeading>
            <SocialIconsList>
                <SocialIconsItem><SocialIconsLink target="_blank" href="https://www.facebook.com/BandUnderTheSun/"><SocialIconsImage src={facebookIcon}/></SocialIconsLink></SocialIconsItem>
                <SocialIconsItem><SocialIconsLink target="_blank" href="https://www.instagram.com/bandunderthesunsc/"><SocialIconsImage src={instagramIcon}/></SocialIconsLink></SocialIconsItem>
            </SocialIconsList>
        </Social>
    )
}
