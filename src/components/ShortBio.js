import React from 'react';
import styled from 'styled-components';

// import bandPhoto from '../assets/band-photo.jpg';
import bandPhoto from '../assets/uts-promo-photo-2.jpg';

const ShortBio = styled.section`
    /* padding: 60px 10px; */
    /* background-color: #f9f3e9; */
    margin-top: 24px;
    max-width: 1200px;
    margin: 24px auto 0 auto;

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
    /* font-family: megrim; */
    margin-bottom: 8px;
    font-weight: 300;
`;

const ShortBioContent = styled.div`
    max-width: 450px;
    margin: 0 auto 60px auto;
    margin: 60px 10px 90px 10px;


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

const ShortBioPara = styled.p`
    margin-bottom: 54px;
    margin-top: 0;
`;

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
                <p className="short-bio__bio">
                    <span className="short-bio__heading"><h1 className="short-bio__heading-text">Under the Sun </h1></span>
                    <span className="short-bio__content">is a five piece cover band from Columbia, South Carolina. As their name rightly suggests, Under the Sun plays a variety of genres such as country, pop, classic rock, and 90’s rock. Like they always say, “if you don’t like something you hear, just stick around”.</span>
                </p>
                {/* <span className="short-bio__heading"><ShortBioHeading>Under the Sun</ShortBioHeading></span> */}
                {/* <ShortBioPara>
                    is a five piece cover band from Columbia, South Carolina. As their name rightly suggests, Under The Sun plays a variety of genres such as country, classic rock, 90’s rock, and pop. Like they always say, “if you don’t like something you hear, just stick around”.
                </ShortBioPara> */}
                <a className="short-bio__button" href="mailto:bandunderthesunsc@gmail.com">Book us for your next event</a>
            </ShortBioContent>
            <ShortBioImage src={bandPhoto} alt="Under the Sun group photo"/>
        </ShortBio>
    )
}