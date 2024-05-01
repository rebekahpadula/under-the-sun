import React, { Component } from 'react';
import styled from 'styled-components';

const ShortBio = styled.section`
    margin-top: 24px;
    max-width: 1300px;
    margin: 0px auto 0px auto;
    position: relative;

    @media screen and (min-width: 700px) {
        padding: 0px 10px;
        margin-bottom: 40px;
    }

    @media screen and (min-width: 900px) {
        align-items: center;
        justify-content: center;
        display: flex;
    }
`;

const ShortBioHeading = styled.h1`
    font-size: 30px;
    margin-top: 0;
    margin-bottom: 8px;
    font-weight: 300;
`;

const ShortBioContent = styled.div`
    max-width: 450px;
    text-align: center;
    margin: 24px auto 48px auto;


    @media screen and (min-width: 700px) {
        padding-right: 20px;
    }

    @media screen and (min-width: 900px) {
        flex-basis: 50%;
        max-width: 50%;
        margin: 0 auto;
        text-align: left;
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
                        <span className="short-bio__content">is a six-piece party band from Columbia, South Carolina that plays a huge variety of genres and all the hits especially from the 90’s, 00’s and today! With multiple vocalists, professional lighting & sound, and thousands of successful events under their belts, the members of Under the Sun know how to bring the party to your event.</span>
                    </p>
                    <p>For booking inquiries, simply shoot us an email to check if we are available for your date! Be sure to fill out all of the prompts already included in the email and feel free to give us any additional details about the event.</p> 
                    <p>We can't wait to hear from you!</p>
                    <div className="short-bio__button-container">
                      <a className="short-bio__button" href="mailto:dbaker@bookece.com?cc=bandunderthesunsc@gmail.com&subject=Under The Sun Inquiry&body=Event type:          Date:          Location:          Contact information:          Any Additional info: ">Send Inquiry</a>
                    </div>
                </ShortBioContent>
                <iframe className="iframe" width="560" height="315" src="https://www.youtube.com/embed/Q9TNU4VkM1c?si=lj6FTaoeFGiZjKzb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </ShortBio>
        )
    }
}
