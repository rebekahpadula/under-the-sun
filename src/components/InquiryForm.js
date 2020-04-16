import React, { Component } from 'react';

export default class InquiryForm extends Component {

    constructor(props) {
        super(props);
        // this.state = {};
      }

    // shouldComponentUpdate(nextProps) {}
    // built in functions dont need to be bound
    // arrow functions bind automatically
    // regular functions need to be bound

    render() {
        return (
                                        // does this work or do i need a <a> ?  
            <form className="form" action="mailto:dbaker@bookece.com?cc=bandunderthesunsc@gmail.com&subject=Your Under the Sun Booking Inquiry" method="post" enctype="text/plain" target="_blank">
                <h2 className="form__heading">Tell us about your event</h2>

                <div className="form__content">
                    <div className="form__field">
                        <label className="form__label" for="name">Name</label>
                        <input className="form__input" type="text" id="name" name="Name " required/>
                    </div>

                    <div className="form__field">
                        <label className="form__label" for="email">Email</label>
                        <input className="form__input" type="text" id="email" name="Email " required/>
                    </div>

                    <div className="form__field">
                        <label className="form__label" for="phone">Phone</label>
                        <input className="form__input" type="tel" id="phone" name="Phone " required/>
                    </div>

                    <div className="form__field">
                        <label className="form__label" for="date">Event date</label>
                        <input className="form__input" type="date" id="date" name="Date " required/>
                    </div>

                    <div className="form__field">
                        <label className="form__label" for="location">Location of event</label>
                        <input className="form__input" type="text" id="location" name="Location " required/>
                    </div>

                    <div className="form__field">
                        <label className="form__label" for="type">What type of event are you planning?</label>
                        <select className="form__input" type="text" id="type" name="Type " required>
                            {/* best practice for this termonology? */}
                            <option value="Make a selection">Make a selection</option>
                            <option value="Corporate event">Corporate event</option>
                            <option value="Private or social event">Private or social event</option>
                            <option value="Association, conference, or convention event">Association, conference, or convention event</option>
                            <option value="School or university event">School or university event</option>
                            <option value="Fair or festival">Fair or festival</option>
                            <option value="Performing arts event">Performing arts event</option>
                            <option value="Bar or nightclub event">Bar or nightclub event</option>
                            <option value="Birthday party">Birthday party</option>
                            <option value="Wedding">Wedding</option>   
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    <div className="form__field">
                        <label className="form__label" for="more">Tell us more</label>
                        <textarea className="form__input" id="more" name="More "/>
                    </div>
                </div>

                <input className="form__submit" type="submit" value="Send Inquiry"/>

            </form>
        );
    }
}