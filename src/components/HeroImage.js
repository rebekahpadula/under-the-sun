import React from 'react';
import styled from 'styled-components';

import HeroVideo from './HeroVideo';

import bandPhoto from '../assets/under-the-sun-1.jpg';

const HeroImage = styled.img`
    height: auto;
    width: 100%;
    display: block;
`;

class Hero extends React.Component {
    constructor(props) {
        super(props);
    }

    // render() {
    //     return (
    //           <HeroVideo/>
    //         <div>
    //             <HeroImage src={bandPhoto}/>
    //             <h1 className="heading">Are you a fan of <span className="txt-rotate" data-rotate='["country?", "top 40?", "classic rock?", "90s?"]' data-period="2000"></span></h1>
    //         </div>
    //     )
    // }
}

export default Hero;