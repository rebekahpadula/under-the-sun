import React, { Component } from 'react';
import styled from 'styled-components';

import InquiryForm from './InquiryForm';

// import bandPhoto from '../assets/band-photo.jpg';
import bandPhoto from '../assets/uts-promo-photo-kel.jpeg';

const ShortBio = styled.section`
    margin-top: 24px;
    max-width: 1300px;
    margin: 0px auto 0 auto;
    position: relative;

    @media screen and (min-width: 700px) {
        padding: 60px 10px;
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
    margin: 40px 10px 40px 10px;


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

export default class ShortBioComp extends Component {

    constructor(props) {
        super(props);
        // this.state = {};

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        const openButton = document.querySelector('.short-bio__button');
        console.log(openButton.classList);
        const modal = document.querySelector('.modal');
        console.log(modal);

        modal.classList.add('active');
    }

    closeModal() {
        const closeButton = document.querySelector('.modal__close-button');
        console.log(closeButton);
        const modal = document.querySelector('.modal');
        modal.classList.remove('active');
    }

    render() {
        return (
            <ShortBio>
                <ShortBioContent>
                    <p className="short-bio__bio">
                        <span className="short-bio__heading"><h1 className="short-bio__heading-text">Under the Sun </h1></span>
                        <span className="short-bio__content">is a six-piece party band from Columbia, South Carolina that plays a huge variety of genres and all the hits especially from the 90’s, 00’s and today! With multiple vocalists, professional lighting & sound and thousands of successful events under their belts, the members of Under the Sun know how to bring the party to your event.</span>
                    </p>
                    <p>For booking inquiries, simply shoot us an email to check if we are available for your date! Be sure to fill out all of the prompts already included in the email and feel free to give us any additional details about the event. We can't wait to hear from you!</p>
                    {/* <span className="short-bio__heading"><ShortBioHeading>Under the Sun</ShortBioHeading></span> */}
                    {/* <ShortBioPara>
                        is a five piece cover band from Columbia, South Carolina. As their name rightly suggests, Under The Sun plays a variety of genres such as country, classic rock, 90’s rock, and pop. Like they always say, “if you don’t like something you hear, just stick around”.
                    </ShortBioPara> */}
                    {/* <a className="short-bio__button" href="mailto:bandunderthesunsc@gmail.com">Send Inquiry</a> */}

                    <button onClick={this.openModal} className="short-bio__button">Send Inquiry</button>
                </ShortBioContent>
                <ShortBioImage src={bandPhoto} alt="Under the Sun group photo"/>
                <div className="modal">
                    <div className="modal__controls">
                        <button onClick={this.closeModal} className="modal__close-button" name="close"><svg alt="close button" enable-background="new 0 0 100 100" id="Layer_1" version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><polygon fill="#ccc" points="77.6,21.1 49.6,49.2 21.5,21.1 19.6,23 47.6,51.1 19.6,79.2 21.5,81.1 49.6,53 77.6,81.1 79.6,79.2 51.5,51.1 79.6,23 "/></svg></button>
                    </div>
                    <div className="modal__content">
                        <InquiryForm/>
                    </div>
                </div>
            </ShortBio>
        )
    }
}
