import React from 'react';
import styled from 'styled-components';

import SrOnlyHeading from './SrOnlyHeading';

import facebookIcon from '../assets/icon-fb.svg';
import instagramIcon from '../assets/icon-ig.svg';
import youtubeIcon from '../assets/icon-yt.svg';

const Social = styled.section`
    text-align: center;
    padding: 0 5px;
    /* background-color: #45a8d2; not full width gees */
`;

const SocialIconsList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
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
        <Social id="contact">
            <SrOnlyHeading>Social media links</SrOnlyHeading>
            <SocialIconsList>
                <SocialIconsItem><SocialIconsLink href="https://www.facebook.com/BandUnderTheSun/"><SocialIconsImage src={facebookIcon}/></SocialIconsLink></SocialIconsItem>
                <SocialIconsItem><SocialIconsLink href="https://www.instagram.com/bandunderthesunsc/"><SocialIconsImage src={instagramIcon}/></SocialIconsLink></SocialIconsItem>
                <SocialIconsItem><SocialIconsLink href="https://www.youtube.com/channel/UCxvOJnlOa_gegYWQFUpmeUw"><SocialIconsImage src={youtubeIcon}/></SocialIconsLink></SocialIconsItem>
            </SocialIconsList>
        </Social>
    )
}