import React from 'react';
import styled from 'styled-components';

// import bandPhoto from '../assets/band-photo.jpg';
import bandPhoto from '../assets/under-the-sun-2.jpg';

const ShortBio = styled.section`
    padding: 60px 10px;
    background-color: #f9f3e9;

    @media screen and (min-width: 700px) {
        padding: 60px 20px;
    }

    @media screen and (min-width: 768px) {
        align-items: center;
        justify-content: center;
        display: flex;
    }
`;

const ShortBioHeading = styled.h1`
    font-size: 30px;
    margin-top: 0;
    font-family: megrim;
`;

const ShortBioContent = styled.div`
    max-width: 450px;
    margin: 0 auto 60px auto;

    @media screen and (min-width: 700px) {
        padding-right: 20px;
    }
    
    @media screen and (min-width: 768px) {
        flex-basis: 50%;
        max-width: 50%;
        margin: 0 auto;
    }

    @media screen and (min-width: 1100px) {
        padding-right: 80px;
    }
`;

const ShortBioPara = styled.p``;

const ShortBioImage = styled.img`
    width: 100%;
    
    @media screen and (min-width: 768px) {
        flex-basis: 50%;
        max-width: 50%;
        max-height: 450px;
        margin-left: 20px;
    }
`;

export default (props) => {
    return (
        <ShortBio id="short-bio">
            <ShortBioContent>
                <ShortBioHeading>Bio</ShortBioHeading>
                <ShortBioPara>
                    Under The Sun is a cover band from Columbia, South Carolina. As their name rightly suggests, Under The Sun plays a variety of genres such as country, classic rock, 90’s rock, and pop. Like they always say, “if you don’t like something you hear, just stick around”.
                </ShortBioPara>
            </ShortBioContent>
            <ShortBioImage src={bandPhoto} alt="Under the Sun playing live at such and such place"/>
        </ShortBio>
    )
}