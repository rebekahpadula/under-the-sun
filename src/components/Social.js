import React from 'react';
import styled from 'styled-components';

import SrOnlyHeading from './SrOnlyHeading';

import facebookIcon from '../assets/icon-fb.svg';
import instagramIcon from '../assets/icon-ig.svg';
import tiktokIcon from '../assets/icon-tt.svg';

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
    padding: 8px 16px;
`;

const SocialIconsLink = styled.a``;

const SocialIconsImage = styled.img`
    height: 30px;
`;

export default (props) => {
    return (
        <Social>
            <SrOnlyHeading>Social media links</SrOnlyHeading>
            <SocialIconsList>
                <SocialIconsItem><SocialIconsLink target="_blank" href="https://www.facebook.com/BandUnderTheSun/"><SocialIconsImage src={facebookIcon}/></SocialIconsLink></SocialIconsItem>
                <SocialIconsItem><SocialIconsLink target="_blank" href="https://www.instagram.com/bandunderthesunsc/"><SocialIconsImage src={instagramIcon}/></SocialIconsLink></SocialIconsItem>
                <SocialIconsItem><SocialIconsLink target="_blank" href="https://www.tiktok.com/@bandunderthesunsc"><SocialIconsImage src={tiktokIcon}/></SocialIconsLink></SocialIconsItem>
            </SocialIconsList>
        </Social>
    )
}
