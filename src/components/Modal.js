// import React, { Component } from 'react';

// import InquiryForm from './InquiryForm';

// export default class Modal extends Component {

//     constructor(props) {
//         super(props);
//         // this.state = {};

//         this.closeModal = this.closeModal.bind(this);

//     }

//     closeModal() {
//         const closeButton = document.querySelector('.modal__close-button');
//         console.log(closeButton);
//         const modal = document.querySelector('.modal');
//         modal.classList.remove('active');
//     }
    
//     // shouldComponentUpdate(nextProps) {}
//     // built in functions dont need to be bound
//     // arrow functions bind automatically
//     // regular functions need to be bound

//     // render() {
//         // return (
//         //     <div className="modal">
//         //         <div className="modal__controls">
//         //             <button onClick={this.closeModal} className="modal__close-button">Close <svg enable-background="new 0 0 100 100" id="Layer_1" version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><polygon fill="#ccc" points="77.6,21.1 49.6,49.2 21.5,21.1 19.6,23 47.6,51.1 19.6,79.2 21.5,81.1 49.6,53 77.6,81.1 79.6,79.2 51.5,51.1 79.6,23 "/></svg></button>
//         //         </div>
//         //         <InquiryForm/>
//         //     </div>
//         // );
//     // }
// }